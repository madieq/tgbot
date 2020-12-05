"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const error_1 = require("./error");
class App {
    constructor() { }
    setMongo(m) { this._mongo = m; return this; }
    getMongo() {
        if (!this._mongo)
            throw new error_1.CustomError('ERROR', '[app] mongo is not defined');
        return this._mongo;
    }
    setTg(t) { this._tg = t; return this; }
    getTg() {
        if (!this._tg)
            throw new error_1.CustomError('ERROR', '[app] tg is not defined');
        return this._tg;
    }
    static getInstance() {
        if (!this.instance)
            this.instance = new App;
        return this.instance;
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map