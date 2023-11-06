const express = require("express");
const commentNewsRouter = express.Router();
const commentNewsController = require("../controller/commentNews.controller");

commentNewsRouter.post("/:newsId", commentNewsController.create);
commentNewsRouter.get("/:newsId", commentNewsController.getAllCommentOfNews);
commentNewsRouter.patch("/:newsId", commentNewsController.update);
commentNewsRouter.delete("/:newsId", commentNewsController.delete);

module.exports = commentNewsRouter;
