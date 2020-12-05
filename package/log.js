"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const error_1 = require("./error");
class Logger {
    static getLogMark() {
        let obj = {
            PROJECT_NAME: process.env.PROJECT_NAME || '',
            APP_NAME: process.env.APP_NAME || '',
            timestamp: Date.now(),
            date: new Date().toISOString(),
        };
        return obj;
    }
    static async log(msg) {
        let level = 'INFO';
        let out = { message: '' };
        if (msg && typeof msg === 'string')
            out.message = msg;
        else if (msg && !Array.isArray(msg) && typeof msg === 'object') {
            out = msg;
            if (msg instanceof error_1.CustomError)
                level = msg.ok === false ? 'ERROR' : 'INFO';
        }
        out = Object.assign({ level }, out, Logger.getLogMark());
        // let m = await asyncJson.stringify(out)
        let m = JSON.stringify(out);
        console.log(m);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=log.js.map