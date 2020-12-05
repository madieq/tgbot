import { CustomError } from "./error"

export interface Log {
    level: 'ERROR' | 'INFO' | 'DEBUG',
    message?: string,
    payload?: string,
    file: string,
    [key: string]: any,
}

export class Logger {
    static getLogMark() {
        let obj = {
            PROJECT_NAME: process.env.PROJECT_NAME || '',
            APP_NAME: process.env.APP_NAME || '',
            timestamp: Date.now(),
            date: new Date().toISOString(),
        }
        return obj
    }
    static async log(msg: CustomError | Log | string) {
        let level: string = 'INFO'
        let out: { [key: string]: any } = { message: '' }
        if (msg && typeof msg === 'string')
            out.message = msg
        else if (msg && !Array.isArray(msg) && typeof msg === 'object') {
            out = msg
            if (msg instanceof CustomError)
                level = msg.ok === false ? 'ERROR' : 'INFO'
        }

        out = Object.assign({ level }, out, Logger.getLogMark())
        // let m = await asyncJson.stringify(out)
        let m = JSON.stringify(out)
        console.log(m)
    }
}