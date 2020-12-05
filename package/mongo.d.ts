import * as mongoose from 'mongoose';
export declare class MongoClient {
    uri: string;
    private connect;
    static ChatSchema: {
        chatId: {
            type: StringConstructor;
            index: {
                unique: boolean;
            };
        };
        userId: StringConstructor;
    };
    chats: typeof mongoose.Model | undefined;
    init(): Promise<this>;
}
//# sourceMappingURL=mongo.d.ts.map