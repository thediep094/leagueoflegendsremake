const express = require("express");
const walletRouter = express.Router();
const walletController = require("../controller/wallet.controller");

// tạo order
walletRouter.get("/", walletController.createWalletForAllUsers);
// Tạo ví cho người dùng cụ thể
walletRouter.post("/", walletController.create);

// Tăng số tiền trong ví
walletRouter.post("/increase-balance", walletController.increaseBalance);

// Giảm số tiền trong ví
walletRouter.post("/decrease-balance", walletController.decreaseBalance);
walletRouter.get("/get-wallet/:userId", walletController.getWalletByUserId);

module.exports = walletRouter;
