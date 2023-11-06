const User = require("../model/User");
const Wallet = require("../model/Wallet");

const WalletController = {
    getWalletByUserId: async (req, res) => {
        const userId = req.params.userId;
        try {
            const wallet = await Wallet.findOne({ user: userId });
            if (wallet) {
                return res.status(200).json({
                    message: "Lấy thông tin ví thành công",
                    data: wallet,
                });
            } else {
                return res.status(404).json({
                    message: "Ví không tồn tại",
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    createWalletForAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            for (const user of users) {
                const existingWallet = await Wallet.findOne({ user: user._id });
                if (!existingWallet) {
                    await Wallet.create({
                        user: user._id,
                        balance: 10000,
                    });
                }
            }
            return res.status(200).json({
                message: "Tạo ví cho tất cả người dùng thành công",
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    create: async (req, res) => {
        const userId = req.body.userId;
        try {
            const wallet = await Wallet.create({
                user: userId,
                balance: 10000, // Mặc định số tiền ban đầu là 0
            });
            return res.status(200).json({
                message: "Tạo ví thành công",
                data: wallet,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    increaseBalance: async (req, res) => {
        const userId = req.body.userId;
        const amount = req.body.amount;

        try {
            const wallet = await Wallet.findOne({ user: userId });
            if (wallet) {
                wallet.balance += amount;
                await wallet.save();
                return res.status(200).json({
                    message: "Tăng số tiền thành công",
                    data: wallet,
                });
            } else {
                return res.status(404).json({
                    message: "Ví không tồn tại",
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    decreaseBalance: async (req, res) => {
        const userId = req.body.userId;
        const amount = req.body.amount;

        try {
            const wallet = await Wallet.findOne({ user: userId });
            if (wallet) {
                if (wallet.balance >= amount) {
                    wallet.balance -= amount;
                    await wallet.save();
                    return res.status(200).json({
                        message: "Giảm số tiền thành công",
                        data: wallet,
                    });
                } else {
                    return res.status(400).json({
                        message: "Số dư không đủ",
                    });
                }
            } else {
                return res.status(404).json({
                    message: "Ví không tồn tại",
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

module.exports = WalletController;
