"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const process_worker_1 = require("./process-worker");
const App_1 = require("./App");
const mongo_1 = require("./mongo");
const tg_1 = require("./tg");
const log_1 = require("./log");
const error_1 = require("./error");
console.clear();
async function main() {
    try {
        await process_worker_1.ProcessWorker.init();
        App_1.App.getInstance().setMongo(await (new mongo_1.MongoClient().init()));
        App_1.App.getInstance().setTg(await (new tg_1.TelegramClient().init()));
        let tg = App_1.App.getInstance().getTg();
        if (!tg)
            throw new error_1.CustomError('ERROR', 'tg is undefined');
        tg?.onText(/.+/, async (msg, match) => {
            let { chat } = msg;
            match;
            // await bot.setChatDescription(chat.id, 'desc for mass chats')
            let msgSended = await tg?.sendMessage(chat.id, `qqwe : ${Date.now()}`);
            return;
        });
        log_1.Logger.log('-- app started --');
    }
    catch (error) {
        error = error_1.CustomError.create(error).setCode('RUN_ERROR');
        await log_1.Logger.log(error);
        process_worker_1.ProcessWorker.shutdown();
    }
}
exports.main = main;
//# sourceMappingURL=main.js.map