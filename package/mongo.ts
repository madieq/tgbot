import mongoose from 'mongoose'

export class MongoClient {
    uri: string = process.env.mongo_uri || ''
    private connect: typeof mongoose | undefined
    static ChatSchema = {
        chatId: { type: Number, index: { unique: true } },
        userId: Number,
    }
    chats: typeof mongoose.Model | undefined
    async init() {
        this.connect = await mongoose.connect(this.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        this.chats = mongoose.model('chats', new mongoose.Schema(MongoClient.ChatSchema), 'tst_chats')
        return this
    }
}