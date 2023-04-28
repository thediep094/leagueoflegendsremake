const express = require("express");
const CartRouter = express.Router();
const CartController = require("../controller/cart.controller");
const authMiddleware = require("../middleware/auth.middleware");

CartRouter.post(
    "/",
    authMiddleware.checkRequired,
    authMiddleware.verifiyToken,
    CartController.createCartByUserID,
);

module.exports = CartRouter;
