package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestNewsletterVariantEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.NewsletterVariant(nil)
		if ent == nil {
			t.Fatal("expected non-nil NewsletterVariantEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"newsletter_variant": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.NewsletterVariant(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.NewsletterVariant(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := newsletter_variantBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "newsletter_variant." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CUSTOMERIO_APP_TEST_NEWSLETTER_VARIANT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		newsletterVariantRef01Ent := client.NewsletterVariant(nil)
		newsletterVariantRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "newsletter_variant"}), "newsletter_variant_ref01"))
		newsletterVariantRef01Data["newsletter_id"] = setup.idmap["newsletter01"]
		newsletterVariantRef01Data["test_group_id"] = setup.idmap["test_group01"]

		newsletterVariantRef01DataResult, err := newsletterVariantRef01Ent.Create(newsletterVariantRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		newsletterVariantRef01Data = core.ToMapAny(entityData(newsletterVariantRef01DataResult))
		if newsletterVariantRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if newsletterVariantRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		newsletterVariantRef01Match := map[string]any{
			"newsletter_id": setup.idmap["newsletter01"],
		}

		newsletterVariantRef01ListResult, err := newsletterVariantRef01Ent.List(newsletterVariantRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		newsletterVariantRef01List, newsletterVariantRef01ListOk := newsletterVariantRef01ListResult.([]any)
		if !newsletterVariantRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", newsletterVariantRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(newsletterVariantRef01List), map[string]any{"id": newsletterVariantRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		newsletterVariantRef01DataUp0Up := map[string]any{
			"id": newsletterVariantRef01Data["id"],
			"newsletter_id": setup.idmap["newsletter_id"],
		}

		newsletterVariantRef01MarkdefUp0Name := "body"
		newsletterVariantRef01MarkdefUp0Value := fmt.Sprintf("Mark01-newsletter_variant_ref01_%d", setup.now)
		newsletterVariantRef01DataUp0Up[newsletterVariantRef01MarkdefUp0Name] = newsletterVariantRef01MarkdefUp0Value

		newsletterVariantRef01ResdataUp0Result, err := newsletterVariantRef01Ent.Update(newsletterVariantRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		newsletterVariantRef01ResdataUp0 := core.ToMapAny(entityData(newsletterVariantRef01ResdataUp0Result))
		if newsletterVariantRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if newsletterVariantRef01ResdataUp0["id"] != newsletterVariantRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if newsletterVariantRef01ResdataUp0[newsletterVariantRef01MarkdefUp0Name] != newsletterVariantRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", newsletterVariantRef01MarkdefUp0Name, newsletterVariantRef01ResdataUp0[newsletterVariantRef01MarkdefUp0Name])
		}

		// LOAD
		newsletterVariantRef01MatchDt0 := map[string]any{
			"id": newsletterVariantRef01Data["id"],
		}
		newsletterVariantRef01DataDt0Loaded, err := newsletterVariantRef01Ent.Load(newsletterVariantRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		newsletterVariantRef01DataDt0LoadResult := core.ToMapAny(entityData(newsletterVariantRef01DataDt0Loaded))
		if newsletterVariantRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if newsletterVariantRef01DataDt0LoadResult["id"] != newsletterVariantRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		newsletterVariantRef01MatchRm0 := map[string]any{
			"id": newsletterVariantRef01Data["id"],
		}
		_, err = newsletterVariantRef01Ent.Remove(newsletterVariantRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		newsletterVariantRef01MatchRt0 := map[string]any{
			"newsletter_id": setup.idmap["newsletter01"],
		}

		newsletterVariantRef01ListRt0Result, err := newsletterVariantRef01Ent.List(newsletterVariantRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		newsletterVariantRef01ListRt0, newsletterVariantRef01ListRt0Ok := newsletterVariantRef01ListRt0Result.([]any)
		if !newsletterVariantRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", newsletterVariantRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(newsletterVariantRef01ListRt0), map[string]any{"id": newsletterVariantRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func newsletter_variantBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "newsletter_variant", "NewsletterVariantTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read newsletter_variant test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse newsletter_variant test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"newsletter_variant01", "newsletter_variant02", "newsletter_variant03", "newsletter01", "newsletter02", "newsletter03", "content01", "content02", "content03", "language01", "language02", "language03", "test_group01", "test_group02", "test_group03"},
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
	entidEnvRaw := os.Getenv("CUSTOMERIO_APP_TEST_NEWSLETTER_VARIANT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CUSTOMERIO_APP_TEST_NEWSLETTER_VARIANT_ENTID": idmap,
		"CUSTOMERIO_APP_TEST_LIVE":      "FALSE",
		"CUSTOMERIO_APP_TEST_EXPLAIN":   "FALSE",
		"CUSTOMERIO_APP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CUSTOMERIO_APP_TEST_NEWSLETTER_VARIANT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add newsletter_id alias for update test.
	if idmapResolved["newsletter_id"] == nil {
		idmapResolved["newsletter_id"] = idmapResolved["newsletter01"]
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
