const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoxChatSchema = new Schema(
    {
        user1: { type: String }, // username 1
        user2: { type: String }, // username 2
        // messages: [{ type: String }],
    },
    {
        timestamps: true,
    },
);

const BoxChat = mongoose.modelNames("BoxChat", BoxChatSchema);
module.exports = BoxChat;
