"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClient = void 0;
const mongoose = __importStar(require("mongoose"));
class MongoClient {
    constructor() {
        this.uri = process.env.mongo_uri || '';
    }
    async init() {
        this.connect = await mongoose.connect(this.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        this.chats = mongoose.model('chats', new mongoose.Schema(MongoClient.ChatSchema), 'tst_chats');
        return this;
    }
}
exports.MongoClient = MongoClient;
MongoClient.ChatSchema = {
    chatId: { type: String, index: { unique: true } },
    userId: String,
};
//# sourceMappingURL=mongo.js.map