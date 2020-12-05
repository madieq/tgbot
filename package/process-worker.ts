const asyncJson = require('async-json')
import * as fse from 'fs-extra'
import { CustomError } from './error'
import { Logger } from './log'

export class ProcessWorker {
    static async shutdown(e?: CustomError) {
        await Logger.log('[process] app shutdown')
        process.exit(0)
    }
    static async init() {
        process.on('SIGINT', async () => { ProcessWorker.shutdown() })
        process.on('unhandledRejection', async (error: any) => {
            if (error) {
                error = CustomError.create(error.message || '')
                await Logger.log(error)
            }
            ProcessWorker.shutdown()
        });
        try {
            let addEnv = await fse.readJSON(process.env.SECRET_FILE || '')
            Object.assign(process.env, addEnv)
        } catch (error) { }
    }
}