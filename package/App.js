"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
class App {
    constructor() { }
    setMongo(m) { this._mongo = m; return this; }
    getMongo() { return this._mongo; }
    setTg(t) { this._tg = t; return this; }
    getTg() { return this._tg; }
    static getInstance() {
        if (!this.instance)
            this.instance = new App;
        return this.instance;
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map