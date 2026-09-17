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

func TestDesignStudioEmailEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DesignStudioEmail(nil)
		if ent == nil {
			t.Fatal("expected non-nil DesignStudioEmailEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"design_studio_email": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.DesignStudioEmail(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.DesignStudioEmail(nil).Stream("list", nil, nil) {
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
		setup := design_studio_emailBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "design_studio_email." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CUSTOMERIO_APP_TEST_DESIGN_STUDIO_EMAIL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		designStudioEmailRef01Ent := client.DesignStudioEmail(nil)
		designStudioEmailRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "design_studio_email"}), "design_studio_email_ref01"))
		designStudioEmailRef01Data["email_id"] = setup.idmap["email01"]
		designStudioEmailRef01Data["inbox_preview_id"] = setup.idmap["inbox_preview01"]

		designStudioEmailRef01DataResult, err := designStudioEmailRef01Ent.Create(designStudioEmailRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		designStudioEmailRef01Data = core.ToMapAny(entityData(designStudioEmailRef01DataResult))
		if designStudioEmailRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if designStudioEmailRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		designStudioEmailRef01Match := map[string]any{}

		designStudioEmailRef01ListResult, err := designStudioEmailRef01Ent.List(designStudioEmailRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		designStudioEmailRef01List, designStudioEmailRef01ListOk := designStudioEmailRef01ListResult.([]any)
		if !designStudioEmailRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", designStudioEmailRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(designStudioEmailRef01List), map[string]any{"id": designStudioEmailRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		designStudioEmailRef01DataUp0Up := map[string]any{
			"id": designStudioEmailRef01Data["id"],
		}

		designStudioEmailRef01MarkdefUp0Name := "amp"
		designStudioEmailRef01MarkdefUp0Value := fmt.Sprintf("Mark01-design_studio_email_ref01_%d", setup.now)
		designStudioEmailRef01DataUp0Up[designStudioEmailRef01MarkdefUp0Name] = designStudioEmailRef01MarkdefUp0Value

		designStudioEmailRef01ResdataUp0Result, err := designStudioEmailRef01Ent.Update(designStudioEmailRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		designStudioEmailRef01ResdataUp0 := core.ToMapAny(entityData(designStudioEmailRef01ResdataUp0Result))
		if designStudioEmailRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if designStudioEmailRef01ResdataUp0["id"] != designStudioEmailRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if designStudioEmailRef01ResdataUp0[designStudioEmailRef01MarkdefUp0Name] != designStudioEmailRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", designStudioEmailRef01MarkdefUp0Name, designStudioEmailRef01ResdataUp0[designStudioEmailRef01MarkdefUp0Name])
		}

		// LOAD
		designStudioEmailRef01MatchDt0 := map[string]any{
			"id": designStudioEmailRef01Data["id"],
		}
		designStudioEmailRef01DataDt0Loaded, err := designStudioEmailRef01Ent.Load(designStudioEmailRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		designStudioEmailRef01DataDt0LoadResult := core.ToMapAny(entityData(designStudioEmailRef01DataDt0Loaded))
		if designStudioEmailRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if designStudioEmailRef01DataDt0LoadResult["id"] != designStudioEmailRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		designStudioEmailRef01MatchRm0 := map[string]any{
			"id": designStudioEmailRef01Data["id"],
		}
		_, err = designStudioEmailRef01Ent.Remove(designStudioEmailRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		designStudioEmailRef01MatchRt0 := map[string]any{}

		designStudioEmailRef01ListRt0Result, err := designStudioEmailRef01Ent.List(designStudioEmailRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		designStudioEmailRef01ListRt0, designStudioEmailRef01ListRt0Ok := designStudioEmailRef01ListRt0Result.([]any)
		if !designStudioEmailRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", designStudioEmailRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(designStudioEmailRef01ListRt0), map[string]any{"id": designStudioEmailRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func design_studio_emailBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "design_studio_email", "DesignStudioEmailTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read design_studio_email test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse design_studio_email test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"design_studio_email01", "design_studio_email02", "design_studio_email03", "email01", "email02", "email03", "inbox_preview01", "inbox_preview02", "inbox_preview03", "language01", "language02", "language03", "version01", "version02", "version03", "capture01", "capture02", "capture03"},
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
	entidEnvRaw := os.Getenv("CUSTOMERIO_APP_TEST_DESIGN_STUDIO_EMAIL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CUSTOMERIO_APP_TEST_DESIGN_STUDIO_EMAIL_ENTID": idmap,
		"CUSTOMERIO_APP_TEST_LIVE":      "FALSE",
		"CUSTOMERIO_APP_TEST_EXPLAIN":   "FALSE",
		"CUSTOMERIO_APP_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CUSTOMERIO_APP_TEST_DESIGN_STUDIO_EMAIL_ENTID"])
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
