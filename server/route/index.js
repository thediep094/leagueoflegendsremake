const express = require("express");
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const BoxChatRouter = require("./boxChat.route");
const messageRouter = require("./message.route");
const productRouter = require("./product.route");
const ingameRouter = require("./ingame.route");
const newRouter = require("./new.route");
const cartRouter = require("./cart.route");
const router = express.Router();

router.use("/ingame", ingameRouter);
router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/chat", BoxChatRouter);
router.use("/message", messageRouter);
router.use("/new", newRouter);
router.use("/cart", cartRouter);

module.exports = router;
