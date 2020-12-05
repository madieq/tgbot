
const STATUS_BY_CODE = {
    ERROR: 500,
    RUN_ERROR: 500,
    NOT_FOUND: 404,
    AUTH: 401,
    AUTH_OF_ACTION: 403,
}

type CODE_NAMES = keyof typeof STATUS_BY_CODE
type STATUS_NUMBERS = typeof STATUS_BY_CODE[CODE_NAMES]
interface IErrorData { [key: string]: any }

export class CustomError {
    ok: boolean = false
    code: CODE_NAMES = 'ERROR'
    status: STATUS_NUMBERS = 500
    data: IErrorData = {}
    message: string = ''
    stack: string = ''
    constructor(
        code: CODE_NAMES = 'ERROR',
        message: string = '',
        stack: string = '',
        ok: boolean = false,
        status: STATUS_NUMBERS = 500,
        data: IErrorData = {},
    ) {
        this.ok = ok
        this.code = code
        this.status = status
        this.data = data
        this.message = message
        this.stack = stack
    }
    setCode(code: CODE_NAMES = 'ERROR') {
        if (STATUS_BY_CODE[code] !== undefined) {
            this.code = code
            this.status = STATUS_BY_CODE[code]
        }
        return this
    }
    static create(repeatError: CustomError | Error): CustomError
    static create(code: CODE_NAMES, message?: string, data?: IErrorData): CustomError
    static create(): CustomError {
        if (arguments.length > 0) {
            if (arguments[0] instanceof CustomError)
                return arguments[0]
            else if (typeof arguments[0] === 'string') {
                let out = new CustomError()
                let code: CODE_NAMES = arguments[0] as CODE_NAMES
                out.setCode(code)
                out.data = arguments[2] || {}
                out.message = arguments[1] || ''
                return out
            } else if (arguments[0] instanceof Error
                || (typeof arguments[0] === 'object' && arguments[0].message !== undefined))
                return new CustomError('ERROR', arguments[0].message, arguments[0].stack || '')
            else return new CustomError()
        }
        return new CustomError()
    }
}