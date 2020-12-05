import { CustomError } from './error';
import { MongoClient } from './mongo'
import { TelegramClient } from './tg'

export class App {
    private _mongo: MongoClient | undefined
    private _tg: TelegramClient | undefined
    setMongo(m: MongoClient) { this._mongo = m; return this }
    getMongo(): MongoClient {
        if (!this._mongo)
            throw new CustomError('ERROR', '[app] mongo is not defined')
        return this._mongo
    }
    setTg(t: TelegramClient) { this._tg = t; return this }
    getTg(): TelegramClient {
        if (!this._tg)
            throw new CustomError('ERROR', '[app] tg is not defined')
        return this._tg
    }

    private static instance: App | undefined
    private constructor() { }
    public static getInstance() {
        if (!this.instance)
            this.instance = new App
        return this.instance
    }
}