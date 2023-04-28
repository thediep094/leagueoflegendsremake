const express = require("express");
const productRouter = express.Router();
const multer  = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const cpUpload = upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'thumbnails', maxCount: 10 },
  ]);

const productController = require("../controller/product.controller");

productRouter.post(
    "/create",
    cpUpload,
    productController.create,
);

productRouter.put(
    "/update/:id",
    cpUpload,
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