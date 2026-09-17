package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/customerio-app-sdk/go"
	"github.com/voxgig-sdk/customerio-app-sdk/go/core"

	vs "github.com/voxgig-sdk/customerio-app-sdk/go/utility/struct"
)

func TestEspSuppressionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EspSuppression(nil)
		if ent == nil {
			t.Fatal("expected non-nil EspSuppressionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := esp_suppressionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "esp_suppression." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CUSTOMERIO_APP_TEST_ESP_SUPPRESSION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		espSuppressionRef01Ent := client.EspSuppression(nil)
		espSuppressionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "esp_suppression"}), "esp_suppression_ref01"))
		espSuppressionRef01Data["domain_id"] = setup.idmap["domain01"]
		espSuppressionRef01Data["email_address"] = setup.idmap["email_address01"]
		espSuppressionRef01Data["suppression_type"] = setup.idmap["suppression_type01"]

		espSuppressionRef01DataResult, err := espSuppressionRef01Ent.Create(espSuppressionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		espSuppressionRef01Data = core.ToMapAny(entityData(espSuppressionRef01DataResult))
		if espSuppressionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if espSuppressionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		espSuppressionRef01MatchDt0 := map[string]any{
			"id": espSuppressionRef01Data["id"],
		}
		espSuppressionRef01DataDt0Loaded, err := espSuppressionRef01Ent.Load(espSuppressionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		espSuppressionRef01DataDt0LoadResult := core.ToMapAny(entityData(espSuppressionRef01DataDt0Loaded))
		if espSuppressionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if espSuppressionRef01DataDt0LoadResult["id"] != espSuppressionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		espSuppressionRef01MatchRm0 := map[string]any{
			"id": espSuppressionRef01Data["id"],
		}
		_, err = espSuppressionRef01Ent.Remove(espSuppressionRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func esp_suppressionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "esp_suppression", "EspSuppressionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read esp_suppression test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse esp_suppression test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"esp_suppression01", "esp_suppression02", "esp_suppression03", "domain01", "domain02", "domain03", "search_suppression01", "search_suppression02", "search_suppression03", "suppression01", "suppression02", "suppression03", "email_address01", "suppression_type01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CUSTOMERIO_APP_TEST_ESP_SUPPRESSION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CUSTOMERIO_APP_TEST_ESP_SUPPRESSION_ENTID": idmap,
		"CUSTOMERIO_APP_TEST_LIVE":      "FALSE",
		"CUSTOMERIO_APP_TEST_EXPLAIN":   "FALSE",
		"CUSTOMERIO_APP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CUSTOMERIO_APP_TEST_ESP_SUPPRESSION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CUSTOMERIO_APP_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CUSTOMERIO_APP_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCustomerioAppSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CUSTOMERIO_APP_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CUSTOMERIO_APP_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
