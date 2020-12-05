"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClient = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongoClient {
    constructor() {
        this.uri = process.env.mongo_uri || '';
    }
    async init() {
        this.connect = await mongoose_1.default.connect(this.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        this.chats = mongoose_1.default.model('chats', new mongoose_1.default.Schema(MongoClient.ChatSchema), 'tst_chats');
        return this;
    }
}
exports.MongoClient = MongoClient;
MongoClient.ChatSchema = {
    chatId: { type: Number, index: { unique: true } },
    userId: Number,
};
//# sourceMappingURL=mongo.js.map