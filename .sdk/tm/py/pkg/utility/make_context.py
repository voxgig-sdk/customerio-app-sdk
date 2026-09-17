# CustomerioApp SDK utility: make_context

from projectname_sdk.core.context import CustomerioAppContext


def make_context_util(ctxmap, basectx):
    return CustomerioAppContext(ctxmap, basectx)
