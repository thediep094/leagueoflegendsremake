const express = require("express");
const PurchaseItemRouter = express.Router();
const PurchaseItemController = require("../controller/purchaseItem.controller");

PurchaseItemRouter.get("/:userId", PurchaseItemController.getPurchasedIcons);
PurchaseItemRouter.post("/", PurchaseItemController.createPurchaseItem);

module.exports = PurchaseItemRouter;
