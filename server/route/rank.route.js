const express = require("express");
const rankRouter = express.Router();
const rankController = require("../controller/rank.controller")

rankRouter.get(
    "/search",
    rankController.getRankByUsername,
);


module.exports = rankRouter;