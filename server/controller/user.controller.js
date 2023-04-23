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
    getUserByID: async (req, res) => {
        try {
            const id = req.body.verify_id;
            // console.log(req);
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
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await User.findByIdAndUpdate(id, req.body);
            if (data) {
                return res.status(200).json({
                    message: "Sửa thông tin thành công",
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
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await User.findByIdAndDelete(id);
            if (data) {
                return res.status(200).json({
                    message: "Xoá người dùng thành công",
                    // user: data,
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
