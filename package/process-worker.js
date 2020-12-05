"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessWorker = void 0;
const asyncJson = require('async-json');
const fse = __importStar(require("fs-extra"));
const error_1 = require("./error");
const log_1 = require("./log");
class ProcessWorker {
    static async shutdown(e) {
        await log_1.Logger.log('[process] app shutdown');
        process.exit(0);
    }
    static async init() {
        process.on('SIGINT', async () => { ProcessWorker.shutdown(); });
        process.on('unhandledRejection', async (error) => {
            if (error) {
                error = error_1.CustomError.create(error.message || '');
                await log_1.Logger.log(error);
            }
            ProcessWorker.shutdown();
        });
        try {
            let addEnv = await fse.readJSON(process.env.SECRET_FILE || '');
            Object.assign(process.env, addEnv);
        }
        catch (error) { }
    }
}
exports.ProcessWorker = ProcessWorker;
//# sourceMappingURL=process-worker.js.map