const express = require("express");
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const BoxChatRouter = require("./boxChat.route");
const messageRouter = require("./message.route");
const productRouter = require("./product.route");
const ingameRouter = require("./ingame.route");
const router = express.Router();

router.use("/ingame", ingameRouter);
router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/chat", BoxChatRouter);
router.use("/message", messageRouter);

module.exports = router;
