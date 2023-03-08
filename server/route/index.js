const express = require("express");
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter)

module.exports = router;
