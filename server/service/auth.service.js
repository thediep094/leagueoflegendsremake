const User = require("../model/User");
const Token = require("../model/Token");
const jwt = require("jsonwebtoken");

const spawnToken = async (user) => {
    const accessToken = jwt.sign(
        { _id: user._id },
        process.env.SECRET_KEY_ACCESS,
        { expiresIn: parseInt(process.env.ACCESS_TOKEN_EXPIRE || 10) * 60 },
    );

    const refreshToken = jwt.sign(
        { _id: user._id },
        process.env.SECRET_KEY_REFRESH,
        { expiresIn: parseInt(process.env.REFRESH_TOKEN_EXPIRE || 10) * 60 },
    );

    let token = {
        accessToken: accessToken,
        expiresAt:
            Date.now() + Number(process.env.ACCESS_TOKEN_EXPIRE) * 60 * 1000,
        refreshToken: refreshToken,
        expiresAt:
            Date.now() + Number(process.env.REFRESH_TOKEN_EXPIRE) * 60 * 1000,
    };

    return token;
};

const deleteTokenDB = async (user) => {
    const token = await Token.findById(user._id);
    if (token) {
        await token.delete();
    }
};

module.exports = { spawnToken, deleteTokenDB };
