"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
const STATUS_BY_CODE = {
    ERROR: 500,
    RUN_ERROR: 500,
    NOT_FOUND: 404,
    AUTH: 401,
    AUTH_OF_ACTION: 403,
};
class CustomError {
    constructor(code = 'ERROR', message = '', stack = '', ok = false, status = 500, data = {}) {
        this.ok = false;
        this.code = 'ERROR';
        this.status = 500;
        this.data = {};
        this.message = '';
        this.stack = '';
        this.ok = ok;
        this.code = code;
        this.status = status;
        this.data = data;
        this.message = message;
        this.stack = stack;
    }
    setCode(code = 'ERROR') {
        if (STATUS_BY_CODE[code] !== undefined) {
            this.code = code;
            this.status = STATUS_BY_CODE[code];
        }
        return this;
    }
    static create() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof CustomError)
                return arguments[0];
            else if (typeof arguments[0] === 'string') {
                let out = new CustomError();
                let code = arguments[0];
                out.setCode(code);
                out.data = arguments[2] || {};
                out.message = arguments[1] || '';
                return out;
            }
            else if (arguments[0] instanceof Error
                || (typeof arguments[0] === 'object' && arguments[0].message !== undefined))
                return new CustomError('ERROR', arguments[0].message, arguments[0].stack || '');
            else
                return new CustomError();
        }
        return new CustomError();
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=error.js.map