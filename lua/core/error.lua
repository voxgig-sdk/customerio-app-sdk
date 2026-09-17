-- CustomerioApp SDK error

local CustomerioAppError = {}
CustomerioAppError.__index = CustomerioAppError


function CustomerioAppError.new(code, msg, ctx)
  local self = setmetatable({}, CustomerioAppError)
  self.is_sdk_error = true
  self.sdk = "CustomerioApp"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CustomerioAppError:error()
  return self.msg
end


function CustomerioAppError:__tostring()
  return self.msg
end


return CustomerioAppError
