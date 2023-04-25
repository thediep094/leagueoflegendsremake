const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageScheme = new Schema(
    {
        user: { type: Schema.Types.ObjectId },
        message: { type: String },
        boxchat: { type: Schema.Types.ObjectId }, // id box chat
    },
    {
        timestamps: true,
    },
);

const Message = mongoose.model("Message", messageScheme);
module.exports = Message;
