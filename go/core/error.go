package core

type CustomerioAppError struct {
	IsCustomerioAppError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCustomerioAppError(code string, msg string, ctx *Context) *CustomerioAppError {
	return &CustomerioAppError{
		IsCustomerioAppError: true,
		Sdk:              "CustomerioApp",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CustomerioAppError) Error() string {
	return e.Msg
}
