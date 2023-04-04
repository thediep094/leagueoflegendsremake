const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/user.controller");
const userMiddleware = require("../middleware/user.middleware");

userRouter.post("/", userMiddleware.checkRequire, userController.create);
userRouter.get("/:id", userController.getUserByID);
module.exports = userRouter;
