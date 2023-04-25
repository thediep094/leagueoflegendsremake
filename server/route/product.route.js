const express = require("express");
const productRouter = express.Router();

const productController = require("../controller/product.controller");

productRouter.post(
    "/create",
    productController.create,
);

productRouter.put(
    "/update/:id",
    productController.update,
);

productRouter.delete(
    "/:id",
    productController.delete,
);

productRouter.get(
    // "/:id",
    "/:id",
    productController.getProductByID,
);

productRouter.get(
    "/",
    productController.getAllProduct,
);

module.exports = productRouter;