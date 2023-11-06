const CommentNews = require("../model/CommentNews");
const mongoose = require("mongoose");
const User = require("../model/User");
const News = require("../model/New");
const moment = require("moment");
const CommentController = {
    create: async (req, res) => {
        const userId = req.body.userId;
        // const id = req.body.verify_id;
        const { newsId } = req.params;
        try {
            const user = await User.findOne({ _id: userId });
            const news = await News.findOne({ _id: newsId });
            if (user && news) {
                req.body.userId = userId;
                req.body.newsId = newsId;
                const newComment = await CommentNews.create(req.body);
                return res.status(200).json({
                    message: "Tạo comment thành công",
                    data: newComment,
                });
            } else {
                return res.status(404).json({
                    message: "User không tồn tại",
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    getAllCommentOfNews: async (req, res) => {
        try {
            const { newsId } = req.params;

            if (!mongoose.isValidObjectId(newsId)) {
                return res.status(400).json({
                    message: "newsId không hợp lệ",
                });
            }

            const data = await CommentNews.aggregate([
                {
                    $match: {
                        newsId: new mongoose.Types.ObjectId(newsId),
                    },
                },
                {
                    $sort: { createdAt: -1 },
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "userId",
                        foreignField: "_id",
                        as: "user",
                    },
                },
                {
                    $addFields: {
                        fullname: "$user.fullname",
                        ingame: "$user.ingame",
                    },
                },
                {
                    $project: {
                        user: 0,
                    },
                },
            ]);

            const formattedData = data.map((comment) => {
                const timestamp = moment(comment?.createdAt).fromNow();
                return {
                    ...comment,
                    createdAt: timestamp,
                };
            });

            if (formattedData.length > 0) {
                return res.status(200).json({
                    message: "Lấy comment thành công",
                    data: formattedData,
                });
            } else {
                return res.status(200).json({
                    message: "Không có comment nào",
                    data: formattedData,
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    update: async (req, res) => {
        try {
            const userId = req.body.userId;
            const { newsId } = req.params;
            const commentId = req.body.commentId;
            req.body.userId = userId;
            req.body.newsId = newsId;
            const data = await CommentNews.findByIdAndUpdate(
                commentId,
                req.body,
                {
                    new: true,
                },
            );
            if (data) {
                return res.status(200).json({
                    message: "Sửa comment thành công",
                    user: data,
                });
            }
            return res.status(404).json({
                message: "Comment không tồn tại",
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { newsId } = req.params;
            const commentId = req.body.commentId;
            const data = await CommentNews.findByIdAndDelete(commentId);
            if (data) {
                return res.status(200).json({
                    message: "Xoá comment thành công",
                });
            }
            return res.status(404).json({
                message: "Comment không tồn tại",
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
};

module.exports = CommentController;
