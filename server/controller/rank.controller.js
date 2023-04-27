const Rank = require("../model/Rank");
const mongoose = require("mongoose");
const axios = require("axios");
const { getSummonerId } = require("../service/rank.service");
const { options } = require("../route/rank.route");

const RankController = {
    getRankByUsername: async (req, res) => {
        try {
            const { username } = req.body;

            const summonerId = await getSummonerId(username);
            const data = await Rank.findOne({ summonerId: summonerId });
            if (data) {
                return res.status(200).json({
                    message: "Thành công",
                    rank: data,
                });
            }
            axios
                .get(
                    `https://vn2.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`,
                    {
                        headers: {
                            "X-Riot-Token": process.env.RIOT_KEY,
                        },
                    },
                )
                .then(async (response) => {
                    console.log(response.data);
                    const rankData = await Rank.create(response.data);
                    return res.status(200).json({
                        message: "Thành công",
                        data: rankData,
                    });
                })
                .catch(function (err) {
                    return res.status(404).json({
                        message: "Rank không tồn tại",
                    });
                });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    
};

module.exports = RankController;
