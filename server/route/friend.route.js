const express = require("express");
const friendRouter = express.Router();
const friendController = require("../controller/friend.controller");

friendRouter.post("/", friendController.addFriend);
friendRouter.post("/byIngame", friendController.addFriendByIngame); // Assuming this is a new route for adding friends by ingame name
friendRouter.get("/:userId", friendController.getFriendsOfUser);
friendRouter.post("/find", friendController.findUsersByIngame);
friendRouter.delete("/", friendController.removeFriend);

module.exports = friendRouter;
