const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walletSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" }, // Tham chiếu đến người dùng
        balance: { type: Number, default: 10000 }, // Số tiền hiện tại mặc định là 0
    },
    {
        timestamps: true,
    },
);

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = Wallet;
