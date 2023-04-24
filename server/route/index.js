const express = require("express");
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const productRouter = require("./product.route");
const router = express.Router();

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);

module.exports = router;
