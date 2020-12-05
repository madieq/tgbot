
import { ProcessWorker } from './process-worker'
import { App } from './App'
import { MongoClient } from './mongo'
import { TelegramClient } from './tg'
import { Logger } from './log';
import { CustomError } from './error';

console.clear();
export async function main() {
    try {
        await ProcessWorker.init()
        App.getInstance().setMongo(await (new MongoClient().init()))
        App.getInstance().setTg(await (new TelegramClient().init()))
        let tg = App.getInstance().getTg()
        tg.onText(/.+/, async (msg, match) => {
            let { chat } = msg; match;
            let msgSended = await tg.sendMessage(chat.id, `qqwe : ${Date.now()}`);
            return
        })

        Logger.log('-- app started --')
    } catch (error) {
        error = CustomError.create(error).setCode('RUN_ERROR')
        await Logger.log(error)
        ProcessWorker.shutdown()
    }
}
