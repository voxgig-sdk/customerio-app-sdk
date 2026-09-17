import { Context } from './Context';
declare class CustomerioAppError extends Error {
    isCustomerioAppError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CustomerioAppError };
