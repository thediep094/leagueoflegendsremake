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
  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findById(id);
      if (data) {
        return res.status(200).json({
          message: "Thành công",
          user: data,
        });
      }
      return res.status(404).json({
        message: "Người dùng không tồn tại",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error: error,
      });
    }
  },
};

module.exports = UserController;
