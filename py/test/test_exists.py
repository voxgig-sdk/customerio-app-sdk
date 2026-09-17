# CustomerioApp SDK exists test

import pytest
from customerioapp_sdk import CustomerioAppSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CustomerioAppSDK.test(None, None)
        assert testsdk is not None
