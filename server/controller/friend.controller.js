const Friend = require("../model/Friend");
const mongoose = require("mongoose");
const User = require("../model/User");

const FriendController = {
    addFriend: async (req, res) => {
        const { userId, friendId } = req.body;

        try {
            const user = await User.findOne({ _id: userId });
            const friend = await User.findOne({ _id: friendId });

            if (user && friend) {
                const newFriendship = await Friend.create({ userId, friendId });

                return res.status(200).json({
                    message: "Thêm bạn thành công",
                    data: newFriendship,
                });
            } else {
                return res.status(404).json({
                    message: "User hoặc Friend không tồn tại",
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    getFriendsOfUser: async (req, res) => {
        const { userId } = req.params;

        try {
            if (!mongoose.isValidObjectId(userId)) {
                return res.status(400).json({
                    message: "userId không hợp lệ",
                });
            }

            const friends = await Friend.aggregate([
                {
                    $match: { userId: new mongoose.Types.ObjectId(userId) },
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "friendId",
                        foreignField: "_id",
                        as: "friend",
                    },
                },
                {
                    $addFields: {
                        username: { $arrayElemAt: ["$friend.username", 0] },
                        fullname: { $arrayElemAt: ["$friend.fullname", 0] },
                        ingame: { $arrayElemAt: ["$friend.ingame", 0] },
                        mainAva: { $arrayElemAt: ["$friend.mainAva", 0] },
                    },
                },
                {
                    $project: {
                        friend: 0,
                    },
                },
            ]);

            if (friends.length > 0) {
                return res.status(200).json({
                    message: "Lấy danh sách bạn bè thành công",
                    data: friends,
                });
            } else {
                return res.status(200).json({
                    message: "Không có bạn bè nào",
                    data: friends,
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    addFriendByIngame: async (req, res) => {
        const { userId, friendIngame } = req.body;

        try {
            const user = await User.findOne({ _id: userId });
            const friend = await User.findOne({ ingame: friendIngame });

            if (user && friend) {
                const existingFriendship = await Friend.findOne({
                    userId,
                    friendId: friend._id,
                });

                if (existingFriendship) {
                    return res.status(400).json({
                        message: "Đã là bạn bè",
                    });
                }

                const newFriendship = await Friend.create({
                    userId,
                    friendId: friend._id,
                });

                return res.status(200).json({
                    message: "Thêm bạn thành công",
                    data: newFriendship,
                });
            } else {
                return res.status(404).json({
                    message: "User hoặc Friend không tồn tại",
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },

    findUsersByIngame: async (req, res) => {
        const { friendIngame } = req.body;

        try {
            const users = await User.find({
                ingame: { $regex: friendIngame || "", $options: "i" },
            });

            if (users.length > 0) {
                return res.status(200).json({
                    message: "Tìm thấy người chơi",
                    data: users,
                });
            } else {
                return res.status(404).json({
                    message: "Không tìm thấy người chơi",
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },

    removeFriend: async (req, res) => {
        const { userId, friendId } = req.body;

        try {
            const deletedFriendship = await Friend.findOneAndDelete({
                userId,
                friendId,
            });

            if (deletedFriendship) {
                return res.status(200).json({
                    message: "Xoá bạn bè thành công",
                });
            } else {
                return res.status(404).json({
                    message: "Không tìm thấy mối quan hệ bạn bè",
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
};

module.exports = FriendController;
