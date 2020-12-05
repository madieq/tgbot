declare const STATUS_BY_CODE: {
    ERROR: number;
    RUN_ERROR: number;
    NOT_FOUND: number;
    AUTH: number;
    AUTH_OF_ACTION: number;
};
declare type CODE_NAMES = keyof typeof STATUS_BY_CODE;
declare type STATUS_NUMBERS = typeof STATUS_BY_CODE[CODE_NAMES];
interface IErrorData {
    [key: string]: any;
}
export declare class CustomError {
    ok: boolean;
    code: CODE_NAMES;
    status: STATUS_NUMBERS;
    data: IErrorData;
    message: string;
    stack: string;
    constructor(code?: CODE_NAMES, message?: string, stack?: string, ok?: boolean, status?: STATUS_NUMBERS, data?: IErrorData);
    setCode(code?: CODE_NAMES): this;
    static create(repeatError: CustomError | Error): CustomError;
    static create(code: CODE_NAMES, message?: string, data?: IErrorData): CustomError;
}
export {};
//# sourceMappingURL=error.d.ts.map