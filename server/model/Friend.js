const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId },
        friendId: { type: Schema.Types.ObjectId },
    },
    {
        timestamps: true,
    },
);

const Friend = mongoose.model("Friend", FriendSchema);
module.exports = Friend;
