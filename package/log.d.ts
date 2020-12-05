import { CustomError } from "./error";
export interface Log {
    level: 'ERROR' | 'INFO' | 'DEBUG';
    message?: string;
    payload?: string;
    file: string;
    [key: string]: any;
}
export declare class Logger {
    static getLogMark(): {
        PROJECT_NAME: string;
        APP_NAME: string;
        timestamp: number;
        date: string;
    };
    static log(msg: CustomError | Log | string): Promise<void>;
}
//# sourceMappingURL=log.d.ts.map