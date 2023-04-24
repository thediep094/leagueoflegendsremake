const express = require("express");
const productRouter = express.Router();

const productController = require("../controller/product.controller");

productRouter.post(
    "/create",
    productController.create,
);

productRouter.get(
    // "/:id",
    "/:id",
    productController.getProductByID,
);

module.exports = productRouter;