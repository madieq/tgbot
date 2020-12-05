"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramClient = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const error_1 = require("./error");
class TelegramClient {
    getBot() {
        if (!this.bot)
            throw new error_1.CustomError('ERROR', 'bot is undefined');
        return this.bot;
    }
    async init() {
        this.bot = new node_telegram_bot_api_1.default(process.env.tg_token || '', { polling: true });
        return this;
    }
    async sendMessage(chatId, textMessage) {
        if (!this.bot)
            throw error_1.CustomError.create('ERROR', 'bot is not defined');
        return this.bot.sendMessage(chatId, textMessage);
    }
    onText(regexp, cb) {
        if (!this.bot)
            throw error_1.CustomError.create('ERROR', 'bot is not defined');
        return this.bot.onText(regexp, cb);
    }
}
exports.TelegramClient = TelegramClient;
//# sourceMappingURL=tg.js.map