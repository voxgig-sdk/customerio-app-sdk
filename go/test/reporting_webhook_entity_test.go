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

func TestReportingWebhookEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ReportingWebhook(nil)
		if ent == nil {
			t.Fatal("expected non-nil ReportingWebhookEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"reporting_webhook": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ReportingWebhook(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ReportingWebhook(nil).Stream("list", nil, nil) {
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
		setup := reporting_webhookBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "reporting_webhook." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CUSTOMERIO_APP_TEST_REPORTING_WEBHOOK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		reportingWebhookRef01Ent := client.ReportingWebhook(nil)
		reportingWebhookRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "reporting_webhook"}), "reporting_webhook_ref01"))

		reportingWebhookRef01DataResult, err := reportingWebhookRef01Ent.Create(reportingWebhookRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		reportingWebhookRef01Data = core.ToMapAny(entityData(reportingWebhookRef01DataResult))
		if reportingWebhookRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if reportingWebhookRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		reportingWebhookRef01Match := map[string]any{}

		reportingWebhookRef01ListResult, err := reportingWebhookRef01Ent.List(reportingWebhookRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		reportingWebhookRef01List, reportingWebhookRef01ListOk := reportingWebhookRef01ListResult.([]any)
		if !reportingWebhookRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", reportingWebhookRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(reportingWebhookRef01List), map[string]any{"id": reportingWebhookRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		reportingWebhookRef01DataUp0Up := map[string]any{
			"id": reportingWebhookRef01Data["id"],
		}

		reportingWebhookRef01MarkdefUp0Name := "endpoint"
		reportingWebhookRef01MarkdefUp0Value := fmt.Sprintf("Mark01-reporting_webhook_ref01_%d", setup.now)
		reportingWebhookRef01DataUp0Up[reportingWebhookRef01MarkdefUp0Name] = reportingWebhookRef01MarkdefUp0Value

		reportingWebhookRef01ResdataUp0Result, err := reportingWebhookRef01Ent.Update(reportingWebhookRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		reportingWebhookRef01ResdataUp0 := core.ToMapAny(entityData(reportingWebhookRef01ResdataUp0Result))
		if reportingWebhookRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if reportingWebhookRef01ResdataUp0["id"] != reportingWebhookRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if reportingWebhookRef01ResdataUp0[reportingWebhookRef01MarkdefUp0Name] != reportingWebhookRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", reportingWebhookRef01MarkdefUp0Name, reportingWebhookRef01ResdataUp0[reportingWebhookRef01MarkdefUp0Name])
		}

		// LOAD
		reportingWebhookRef01MatchDt0 := map[string]any{
			"id": reportingWebhookRef01Data["id"],
		}
		reportingWebhookRef01DataDt0Loaded, err := reportingWebhookRef01Ent.Load(reportingWebhookRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		reportingWebhookRef01DataDt0LoadResult := core.ToMapAny(entityData(reportingWebhookRef01DataDt0Loaded))
		if reportingWebhookRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if reportingWebhookRef01DataDt0LoadResult["id"] != reportingWebhookRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		reportingWebhookRef01MatchRm0 := map[string]any{
			"id": reportingWebhookRef01Data["id"],
		}
		_, err = reportingWebhookRef01Ent.Remove(reportingWebhookRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		reportingWebhookRef01MatchRt0 := map[string]any{}

		reportingWebhookRef01ListRt0Result, err := reportingWebhookRef01Ent.List(reportingWebhookRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		reportingWebhookRef01ListRt0, reportingWebhookRef01ListRt0Ok := reportingWebhookRef01ListRt0Result.([]any)
		if !reportingWebhookRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", reportingWebhookRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(reportingWebhookRef01ListRt0), map[string]any{"id": reportingWebhookRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func reporting_webhookBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "reporting_webhook", "ReportingWebhookTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read reporting_webhook test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse reporting_webhook test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"reporting_webhook01", "reporting_webhook02", "reporting_webhook03"},
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
	entidEnvRaw := os.Getenv("CUSTOMERIO_APP_TEST_REPORTING_WEBHOOK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CUSTOMERIO_APP_TEST_REPORTING_WEBHOOK_ENTID": idmap,
		"CUSTOMERIO_APP_TEST_LIVE":      "FALSE",
		"CUSTOMERIO_APP_TEST_EXPLAIN":   "FALSE",
		"CUSTOMERIO_APP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CUSTOMERIO_APP_TEST_REPORTING_WEBHOOK_ENTID"])
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
