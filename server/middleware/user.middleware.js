const User = require("../model/User");

const userMiddleware = {
  checkRequire: async (req, res, next) => {
    const { fullname, username, password } = req.body;
    if (!fullname || !username || !password) {
      return res.status(400).json({
        message: "Điền thiếu thông tin, vui lòng nhập đầy đủ thông tin",
      });
    }
    next();
  },
  checkRequiredLogin: async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Điền thiếu thông tin, vui lòng nhập đầy đủ thông tin",
      });
    }
    next();
  },
};

module.exports = userMiddleware;
