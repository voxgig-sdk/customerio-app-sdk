# CustomerioApp SDK feature factory

from customerioapp_sdk.feature.base_feature import CustomerioAppBaseFeature
from customerioapp_sdk.feature.debug_feature import CustomerioAppDebugFeature
from customerioapp_sdk.feature.idempotency_feature import CustomerioAppIdempotencyFeature
from customerioapp_sdk.feature.metrics_feature import CustomerioAppMetricsFeature
from customerioapp_sdk.feature.paging_feature import CustomerioAppPagingFeature
from customerioapp_sdk.feature.ratelimit_feature import CustomerioAppRatelimitFeature
from customerioapp_sdk.feature.retry_feature import CustomerioAppRetryFeature
from customerioapp_sdk.feature.test_feature import CustomerioAppTestFeature
from customerioapp_sdk.feature.timeout_feature import CustomerioAppTimeoutFeature


_FEATURES = {
    "base": lambda: CustomerioAppBaseFeature(),
    "debug": lambda: CustomerioAppDebugFeature(),
    "idempotency": lambda: CustomerioAppIdempotencyFeature(),
    "metrics": lambda: CustomerioAppMetricsFeature(),
    "paging": lambda: CustomerioAppPagingFeature(),
    "ratelimit": lambda: CustomerioAppRatelimitFeature(),
    "retry": lambda: CustomerioAppRetryFeature(),
    "test": lambda: CustomerioAppTestFeature(),
    "timeout": lambda: CustomerioAppTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
