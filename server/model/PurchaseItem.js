const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseItemSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
        iconId: { type: String, required: true }, // String representing the ID of the icon
    },
    {
        timestamps: true,
    },
);

const PurchaseItem = mongoose.model("PurchaseItem", purchaseItemSchema);

module.exports = PurchaseItem;
