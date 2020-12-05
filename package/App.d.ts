import { MongoClient } from './mongo';
import { TelegramClient } from './tg';
export declare class App {
    private _mongo;
    private _tg;
    setMongo(m: MongoClient): this;
    getMongo(): MongoClient | undefined;
    setTg(t: TelegramClient): this;
    getTg(): TelegramClient | undefined;
    private static instance;
    private constructor();
    static getInstance(): App;
}
//# sourceMappingURL=App.d.ts.map