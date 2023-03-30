const User = require("../model/User");
const mongoose = require("mongoose");

const UserController = {
  create: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      return res.status(200).json({
        message: "Tạo tài khoản thành công",
        user: newUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error: error,
      });
    }
  },

  read: async (req, res) => {
    try {
      const user = await User.find({
        username: req.params.username,
      });

      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Server error",
        error: error,
      });
    }
  },
};

module.exports = UserController;
