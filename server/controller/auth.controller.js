const User = require('../model/User');
const mongoose = require('mongoose');

const AuthController = {
    login: async (req, res) => {
        try {
            const {
                username,
                password,
            } = req.body;
            const checkUser = await User.findOne(username);
            if (password == checkUser.password) {
                return res.status(200).json({
                    user: checkUser,
                })
            } else {
                return res.status(400).json({
                    message: "Wrong password",
                })
            }

        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    } 
}

module.exports = AuthController;

