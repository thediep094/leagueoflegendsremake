const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        fullname: { type: String, require: true },
        date: { type: String },
        username: { type: String, require: true },
        password: { type: String, require: true, min: 8 },
        mail: { type: String, default: "" },
        ingame: { type: String, default: "" },
        mainAva: { type: String, default: "" },
        role: { type: String, enum: ["user", "admin"], default: "user" }, // Add 'role' field with default value 'user'
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
