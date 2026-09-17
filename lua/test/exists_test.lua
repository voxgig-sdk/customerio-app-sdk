-- CustomerioApp SDK exists test

local sdk = require("customerio-app_sdk")

describe("CustomerioAppSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
