const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imagesSchema = new Schema(
  {
    
    alt: {type: String},
    img: { type: String, default: "" },
    productId: { type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
  },
);

const ProductImages = mongoose.model("ProductImages", imagesSchema);
module.exports = ProductImages;
