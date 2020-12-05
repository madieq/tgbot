import mongoose from 'mongoose';
export declare class MongoClient {
    uri: string;
    private connect;
    static ChatSchema: {
        chatId: {
            type: NumberConstructor;
            index: {
                unique: boolean;
            };
        };
        userId: NumberConstructor;
    };
    chats: typeof mongoose.Model | undefined;
    init(): Promise<this>;
}
//# sourceMappingURL=mongo.d.ts.map