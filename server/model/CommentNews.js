const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentNewsSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId },
        newsId: { type: Schema.Types.ObjectId },
        rate: { type: Number },
        cmt: { type: String },
    },
    {
        timestamps: true,
    },
);

const CommentNews = mongoose.model("CommentNews", CommentNewsSchema);
module.exports = CommentNews;
