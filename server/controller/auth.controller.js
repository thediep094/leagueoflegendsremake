const User = require("../model/User");
const mongoose = require("mongoose");
const Token = require("../model/Token");
const {
    spawnToken,
    deleteTokenDB,
    refresh,
} = require("../service/auth.service");

const AuthController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const checkUser = await User.findOne(username);
            if (!user) {
                return res.status(404).json({
                    message: "Người dùng không tồn tại",
                });
            }
            if (password != checkUser.password) {
                return res.status(400).json({
                    message: "Wrong password",
                });
            }
            await deleteTokenDB(checkUser);
            const token = await spawnToken(checkUser);
            const newToken = await Token.create({
                userID: user._id,
                token: token.refreshToken,
            });
            return res.status(200).json({
                message: "Đăng nhập thành công",
                username: user.username,
                userId: user._id,
                token: token,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },

    refreshToken: async (req, res) => {
        const auth = req.headers.authorization;
        const refreshToken = auth.split(" ")[1];
        const data = refresh(refreshToken);
        return res.status(200).json(data);
    },
};

module.exports = AuthController;
