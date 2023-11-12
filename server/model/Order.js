const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: { type: Number, default: 1 },
                price: { type: Number, required: true },
            },
        ],
        total: { type: Number, default: 0 },
        status: {
            type: String,
            enum: ["new", "done", "delivery"], // Define possible values
            default: "new", // Default value
        },
    },
    {
        timestamps: true,
    },
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
