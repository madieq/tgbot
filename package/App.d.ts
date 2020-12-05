import { MongoClient } from './mongo';
import { TelegramClient } from './tg';
export declare class App {
    private _mongo;
    private _tg;
    setMongo(m: MongoClient): this;
    getMongo(): MongoClient;
    setTg(t: TelegramClient): this;
    getTg(): TelegramClient;
    private static instance;
    private constructor();
    static getInstance(): App;
}
//# sourceMappingURL=App.d.ts.map