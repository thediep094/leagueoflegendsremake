const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controller/cart.controller");
const authMiddleware = require("../middleware/auth.middleware");

cartRouter.post(
    "/",
    authMiddleware.checkRequired,
    authMiddleware.verifiyToken,
    cartController.createCartByUserID,
);
cartRouter.patch("/:id", cartController.update);
cartRouter.patch("/clear/:id", cartController.clear);
module.exports = cartRouter;
