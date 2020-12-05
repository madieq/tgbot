"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
async function sleep(ms) {
    return new Promise((res, rej) => { setTimeout(() => { res(); }, ms); });
}
exports.sleep = sleep;
//# sourceMappingURL=util.js.map