const express = require("express");
const authRouter = express.Router();

const authController = require("../controller/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");
const userMiddleware = require("../middleware/user.middleware");

authRouter.post(
    "/login",
    userMiddleware.checkRequiredLogin,
    authController.login,
);
authRouter.post(
    "/logout",
    authMiddleware.checkRequired,
    authMiddleware.verifiyToken,
    authController.logout,
);
authRouter.post(
    "/refresh-token",
    authMiddleware.checkRequired,
    authController.refreshToken,
);

module.exports = authRouter;
