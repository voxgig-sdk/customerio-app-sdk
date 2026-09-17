package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/customerio-app-sdk/go/utility/struct"
)

type CustomerioAppSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCustomerioAppSDK(options map[string]any) *CustomerioAppSDK {
	sdk := &CustomerioAppSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CustomerioAppSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CustomerioAppSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CustomerioAppSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CustomerioAppSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CustomerioAppSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CustomerioAppSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CustomerioAppSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CustomerioAppSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CustomerioAppSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *CustomerioAppSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CustomerioAppSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Action returns a Action entity bound to this client.
// Idiomatic usage: client.Action(nil).List(nil, nil) or
// client.Action(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Action(data map[string]any) CustomerioAppEntity {
	return NewActionEntityFunc(sdk, data)
}


// Activity returns a Activity entity bound to this client.
// Idiomatic usage: client.Activity(nil).List(nil, nil) or
// client.Activity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Activity(data map[string]any) CustomerioAppEntity {
	return NewActivityEntityFunc(sdk, data)
}


// Asset returns a Asset entity bound to this client.
// Idiomatic usage: client.Asset(nil).List(nil, nil) or
// client.Asset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Asset(data map[string]any) CustomerioAppEntity {
	return NewAssetEntityFunc(sdk, data)
}


// Attribute returns a Attribute entity bound to this client.
// Idiomatic usage: client.Attribute(nil).List(nil, nil) or
// client.Attribute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Attribute(data map[string]any) CustomerioAppEntity {
	return NewAttributeEntityFunc(sdk, data)
}


// Automation returns a Automation entity bound to this client.
// Idiomatic usage: client.Automation(nil).List(nil, nil) or
// client.Automation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Automation(data map[string]any) CustomerioAppEntity {
	return NewAutomationEntityFunc(sdk, data)
}


// Broadcast returns a Broadcast entity bound to this client.
// Idiomatic usage: client.Broadcast(nil).List(nil, nil) or
// client.Broadcast(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Broadcast(data map[string]any) CustomerioAppEntity {
	return NewBroadcastEntityFunc(sdk, data)
}


// Campaign returns a Campaign entity bound to this client.
// Idiomatic usage: client.Campaign(nil).List(nil, nil) or
// client.Campaign(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Campaign(data map[string]any) CustomerioAppEntity {
	return NewCampaignEntityFunc(sdk, data)
}


// Collection returns a Collection entity bound to this client.
// Idiomatic usage: client.Collection(nil).List(nil, nil) or
// client.Collection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Collection(data map[string]any) CustomerioAppEntity {
	return NewCollectionEntityFunc(sdk, data)
}


// Content returns a Content entity bound to this client.
// Idiomatic usage: client.Content(nil).List(nil, nil) or
// client.Content(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Content(data map[string]any) CustomerioAppEntity {
	return NewContentEntityFunc(sdk, data)
}


// Customer returns a Customer entity bound to this client.
// Idiomatic usage: client.Customer(nil).List(nil, nil) or
// client.Customer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Customer(data map[string]any) CustomerioAppEntity {
	return NewCustomerEntityFunc(sdk, data)
}


// DataIndex returns a DataIndex entity bound to this client.
// Idiomatic usage: client.DataIndex(nil).List(nil, nil) or
// client.DataIndex(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) DataIndex(data map[string]any) CustomerioAppEntity {
	return NewDataIndexEntityFunc(sdk, data)
}


// Delivery returns a Delivery entity bound to this client.
// Idiomatic usage: client.Delivery(nil).List(nil, nil) or
// client.Delivery(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Delivery(data map[string]any) CustomerioAppEntity {
	return NewDeliveryEntityFunc(sdk, data)
}


// DesignStudio returns a DesignStudio entity bound to this client.
// Idiomatic usage: client.DesignStudio(nil).List(nil, nil) or
// client.DesignStudio(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) DesignStudio(data map[string]any) CustomerioAppEntity {
	return NewDesignStudioEntityFunc(sdk, data)
}


// DesignStudioEmail returns a DesignStudioEmail entity bound to this client.
// Idiomatic usage: client.DesignStudioEmail(nil).List(nil, nil) or
// client.DesignStudioEmail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) DesignStudioEmail(data map[string]any) CustomerioAppEntity {
	return NewDesignStudioEmailEntityFunc(sdk, data)
}


// Email returns a Email entity bound to this client.
// Idiomatic usage: client.Email(nil).List(nil, nil) or
// client.Email(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Email(data map[string]any) CustomerioAppEntity {
	return NewEmailEntityFunc(sdk, data)
}


// End returns a End entity bound to this client.
// Idiomatic usage: client.End(nil).List(nil, nil) or
// client.End(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) End(data map[string]any) CustomerioAppEntity {
	return NewEndEntityFunc(sdk, data)
}


// EspSuppression returns a EspSuppression entity bound to this client.
// Idiomatic usage: client.EspSuppression(nil).List(nil, nil) or
// client.EspSuppression(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) EspSuppression(data map[string]any) CustomerioAppEntity {
	return NewEspSuppressionEntityFunc(sdk, data)
}


// Export returns a Export entity bound to this client.
// Idiomatic usage: client.Export(nil).List(nil, nil) or
// client.Export(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Export(data map[string]any) CustomerioAppEntity {
	return NewExportEntityFunc(sdk, data)
}


// Import returns a Import entity bound to this client.
// Idiomatic usage: client.Import(nil).List(nil, nil) or
// client.Import(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Import(data map[string]any) CustomerioAppEntity {
	return NewImportEntityFunc(sdk, data)
}


// InApp returns a InApp entity bound to this client.
// Idiomatic usage: client.InApp(nil).List(nil, nil) or
// client.InApp(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) InApp(data map[string]any) CustomerioAppEntity {
	return NewInAppEntityFunc(sdk, data)
}


// InboxMessage returns a InboxMessage entity bound to this client.
// Idiomatic usage: client.InboxMessage(nil).List(nil, nil) or
// client.InboxMessage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) InboxMessage(data map[string]any) CustomerioAppEntity {
	return NewInboxMessageEntityFunc(sdk, data)
}


// Info returns a Info entity bound to this client.
// Idiomatic usage: client.Info(nil).List(nil, nil) or
// client.Info(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Info(data map[string]any) CustomerioAppEntity {
	return NewInfoEntityFunc(sdk, data)
}


// IpAddress returns a IpAddress entity bound to this client.
// Idiomatic usage: client.IpAddress(nil).List(nil, nil) or
// client.IpAddress(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) IpAddress(data map[string]any) CustomerioAppEntity {
	return NewIpAddressEntityFunc(sdk, data)
}


// Language returns a Language entity bound to this client.
// Idiomatic usage: client.Language(nil).List(nil, nil) or
// client.Language(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Language(data map[string]any) CustomerioAppEntity {
	return NewLanguageEntityFunc(sdk, data)
}


// Link returns a Link entity bound to this client.
// Idiomatic usage: client.Link(nil).List(nil, nil) or
// client.Link(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Link(data map[string]any) CustomerioAppEntity {
	return NewLinkEntityFunc(sdk, data)
}


// LiveNotification returns a LiveNotification entity bound to this client.
// Idiomatic usage: client.LiveNotification(nil).List(nil, nil) or
// client.LiveNotification(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) LiveNotification(data map[string]any) CustomerioAppEntity {
	return NewLiveNotificationEntityFunc(sdk, data)
}


// Message returns a Message entity bound to this client.
// Idiomatic usage: client.Message(nil).List(nil, nil) or
// client.Message(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Message(data map[string]any) CustomerioAppEntity {
	return NewMessageEntityFunc(sdk, data)
}


// Newsletter returns a Newsletter entity bound to this client.
// Idiomatic usage: client.Newsletter(nil).List(nil, nil) or
// client.Newsletter(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Newsletter(data map[string]any) CustomerioAppEntity {
	return NewNewsletterEntityFunc(sdk, data)
}


// NewsletterMetric returns a NewsletterMetric entity bound to this client.
// Idiomatic usage: client.NewsletterMetric(nil).List(nil, nil) or
// client.NewsletterMetric(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) NewsletterMetric(data map[string]any) CustomerioAppEntity {
	return NewNewsletterMetricEntityFunc(sdk, data)
}


// NewsletterVariant returns a NewsletterVariant entity bound to this client.
// Idiomatic usage: client.NewsletterVariant(nil).List(nil, nil) or
// client.NewsletterVariant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) NewsletterVariant(data map[string]any) CustomerioAppEntity {
	return NewNewsletterVariantEntityFunc(sdk, data)
}


// Object returns a Object entity bound to this client.
// Idiomatic usage: client.Object(nil).List(nil, nil) or
// client.Object(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Object(data map[string]any) CustomerioAppEntity {
	return NewObjectEntityFunc(sdk, data)
}


// ObjectType returns a ObjectType entity bound to this client.
// Idiomatic usage: client.ObjectType(nil).List(nil, nil) or
// client.ObjectType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) ObjectType(data map[string]any) CustomerioAppEntity {
	return NewObjectTypeEntityFunc(sdk, data)
}


// OptOut returns a OptOut entity bound to this client.
// Idiomatic usage: client.OptOut(nil).List(nil, nil) or
// client.OptOut(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) OptOut(data map[string]any) CustomerioAppEntity {
	return NewOptOutEntityFunc(sdk, data)
}


// Push returns a Push entity bound to this client.
// Idiomatic usage: client.Push(nil).List(nil, nil) or
// client.Push(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Push(data map[string]any) CustomerioAppEntity {
	return NewPushEntityFunc(sdk, data)
}


// Relationship returns a Relationship entity bound to this client.
// Idiomatic usage: client.Relationship(nil).List(nil, nil) or
// client.Relationship(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Relationship(data map[string]any) CustomerioAppEntity {
	return NewRelationshipEntityFunc(sdk, data)
}


// ReportingWebhook returns a ReportingWebhook entity bound to this client.
// Idiomatic usage: client.ReportingWebhook(nil).List(nil, nil) or
// client.ReportingWebhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) ReportingWebhook(data map[string]any) CustomerioAppEntity {
	return NewReportingWebhookEntityFunc(sdk, data)
}


// SearchSuppression returns a SearchSuppression entity bound to this client.
// Idiomatic usage: client.SearchSuppression(nil).List(nil, nil) or
// client.SearchSuppression(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) SearchSuppression(data map[string]any) CustomerioAppEntity {
	return NewSearchSuppressionEntityFunc(sdk, data)
}


// Segment returns a Segment entity bound to this client.
// Idiomatic usage: client.Segment(nil).List(nil, nil) or
// client.Segment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Segment(data map[string]any) CustomerioAppEntity {
	return NewSegmentEntityFunc(sdk, data)
}


// SendMessage returns a SendMessage entity bound to this client.
// Idiomatic usage: client.SendMessage(nil).List(nil, nil) or
// client.SendMessage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) SendMessage(data map[string]any) CustomerioAppEntity {
	return NewSendMessageEntityFunc(sdk, data)
}


// SenderIdentity returns a SenderIdentity entity bound to this client.
// Idiomatic usage: client.SenderIdentity(nil).List(nil, nil) or
// client.SenderIdentity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) SenderIdentity(data map[string]any) CustomerioAppEntity {
	return NewSenderIdentityEntityFunc(sdk, data)
}


// Sms returns a Sms entity bound to this client.
// Idiomatic usage: client.Sms(nil).List(nil, nil) or
// client.Sms(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Sms(data map[string]any) CustomerioAppEntity {
	return NewSmsEntityFunc(sdk, data)
}


// Snippet returns a Snippet entity bound to this client.
// Idiomatic usage: client.Snippet(nil).List(nil, nil) or
// client.Snippet(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Snippet(data map[string]any) CustomerioAppEntity {
	return NewSnippetEntityFunc(sdk, data)
}


// Start returns a Start entity bound to this client.
// Idiomatic usage: client.Start(nil).List(nil, nil) or
// client.Start(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Start(data map[string]any) CustomerioAppEntity {
	return NewStartEntityFunc(sdk, data)
}


// SubscriptionCenter returns a SubscriptionCenter entity bound to this client.
// Idiomatic usage: client.SubscriptionCenter(nil).List(nil, nil) or
// client.SubscriptionCenter(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) SubscriptionCenter(data map[string]any) CustomerioAppEntity {
	return NewSubscriptionCenterEntityFunc(sdk, data)
}


// SubscriptionChannel returns a SubscriptionChannel entity bound to this client.
// Idiomatic usage: client.SubscriptionChannel(nil).List(nil, nil) or
// client.SubscriptionChannel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) SubscriptionChannel(data map[string]any) CustomerioAppEntity {
	return NewSubscriptionChannelEntityFunc(sdk, data)
}


// SubscriptionTopic returns a SubscriptionTopic entity bound to this client.
// Idiomatic usage: client.SubscriptionTopic(nil).List(nil, nil) or
// client.SubscriptionTopic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) SubscriptionTopic(data map[string]any) CustomerioAppEntity {
	return NewSubscriptionTopicEntityFunc(sdk, data)
}


// Suppression returns a Suppression entity bound to this client.
// Idiomatic usage: client.Suppression(nil).List(nil, nil) or
// client.Suppression(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Suppression(data map[string]any) CustomerioAppEntity {
	return NewSuppressionEntityFunc(sdk, data)
}


// TestGroup returns a TestGroup entity bound to this client.
// Idiomatic usage: client.TestGroup(nil).List(nil, nil) or
// client.TestGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) TestGroup(data map[string]any) CustomerioAppEntity {
	return NewTestGroupEntityFunc(sdk, data)
}


// Transactional returns a Transactional entity bound to this client.
// Idiomatic usage: client.Transactional(nil).List(nil, nil) or
// client.Transactional(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Transactional(data map[string]any) CustomerioAppEntity {
	return NewTransactionalEntityFunc(sdk, data)
}


// Trigger returns a Trigger entity bound to this client.
// Idiomatic usage: client.Trigger(nil).List(nil, nil) or
// client.Trigger(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Trigger(data map[string]any) CustomerioAppEntity {
	return NewTriggerEntityFunc(sdk, data)
}


// Update returns a Update entity bound to this client.
// Idiomatic usage: client.Update(nil).List(nil, nil) or
// client.Update(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Update(data map[string]any) CustomerioAppEntity {
	return NewUpdateEntityFunc(sdk, data)
}


// Whatsapp returns a Whatsapp entity bound to this client.
// Idiomatic usage: client.Whatsapp(nil).List(nil, nil) or
// client.Whatsapp(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Whatsapp(data map[string]any) CustomerioAppEntity {
	return NewWhatsappEntityFunc(sdk, data)
}


// Workspace returns a Workspace entity bound to this client.
// Idiomatic usage: client.Workspace(nil).List(nil, nil) or
// client.Workspace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CustomerioAppSDK) Workspace(data map[string]any) CustomerioAppEntity {
	return NewWorkspaceEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CustomerioAppSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCustomerioAppSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
