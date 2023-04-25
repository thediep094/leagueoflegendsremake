const Message = require("../model/Message");
const mongoose = require("mongoose");

const getAllMessageOfBoxChat = async (id) => {
    const chatID = new mongoose.Types.ObjectId(id);
    // console.log(typeof chatID);
    const pipeline = [
        {
            $match: {
                boxchat: chatID,
            },
        },
    ];
    try {
        const data = await Message.aggregate(pipeline);
        // console.log(data);
        return data;
    } catch (error) {
        return false;
    }
};

// getAllMessageOfBoxChat("644786203695cdfe899c34f6");

module.exports = { getAllMessageOfBoxChat };
