import TelegramBot from 'node-telegram-bot-api';
export declare class TelegramClient {
    private bot;
    getBot(): TelegramBot;
    init(): Promise<this>;
    sendMessage(chatId: number, textMessage: string): Promise<TelegramBot.Message>;
    onText(regexp: RegExp, cb: (msg: TelegramBot.Message, match: RegExpExecArray | null) => void): void;
}
//# sourceMappingURL=tg.d.ts.map