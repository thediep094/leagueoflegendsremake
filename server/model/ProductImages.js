const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thumnailSchema = new Schema(
  {
    
    alt: {type: String},
    img: { type: String, default: "" },
    productId: { type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
  },
);

const ThumnailImage = mongoose.model("ThumnailImage", thumnailSchema);
module.exports = ThumnailImage;
