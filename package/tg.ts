import TelegramBot from 'node-telegram-bot-api';
import { CustomError } from './error';

export class TelegramClient {
    private bot: TelegramBot | undefined;
    async init() {
        this.bot = new TelegramBot(process.env.tg_token || '', { polling: true })
        return this
    }
    async sendMessage(chatId: number, textMessage: string) {
        if (!this.bot)
            throw CustomError.create('ERROR', 'bot is not defined')
        return this.bot.sendMessage(chatId, textMessage)
    }
    onText(regexp: RegExp, cb: (msg: TelegramBot.Message, match: RegExpExecArray | null) => void) {
        if (!this.bot)
            throw CustomError.create('ERROR', 'bot is not defined')
        return this.bot.onText(regexp, cb)
    }
}