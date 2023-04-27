const New = require("../model/New");
const mongoose = require("mongoose");
const User = require("../model/User");
const moment = require("moment");
const NewController = {
    create: async (req, res) => {
        try {
            const { title, subtitle, description, author, tags } = req.body;
            const img = Buffer.from(req.file.buffer).toString("base64");
            const newRecord = new New({
                title,
                subtitle,
                description,
                author,
                tags,
                img,
            });

            const result = await newRecord.save();

            return res.status(200).json({
                message: "Created new successfully",
                data: result,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },
    getAllNews: async (req, res) => {
        try {
            const news = await New.find().sort({ createdAt: -1 });

            // Xử lý lại trường createdAt để trả về định dạng ngày mong muốn
            const modifiedNews = news.map((item) => {
                const modifiedItem = item.toObject();
                modifiedItem.createdAt = moment(item.createdAt).fromNow();
                return modifiedItem;
            });

            return res.status(200).json({
                message: "Get all news successfully",
                data: modifiedNews,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },
    // Trả về tin tức theo id
    getNewById: async (req, res) => {
        try {
            const { id } = req.params;
            const news = await New.findById(id);

            // Nếu không tìm thấy tin tức thì trả về lỗi
            if (!news) {
                return res.status(404).json({
                    message: `New with id ${id} not found`,
                });
            }

            // Xử lý lại trường createdAt để trả về định dạng ngày mong muốn
            const modifiedNews = news.toObject();
            modifiedNews.createdAt = moment(news.createdAt).fromNow();

            return res.status(200).json({
                message: "Get news by id successfully",
                data: modifiedNews,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },
    //Update
    updateNewById: async (req, res) => {
        try {
            const { title, subtitle, description, author, tags } = req.body;
            const img = req.file ? req.file.buffer : undefined; // Kiểm tra xem file ảnh có được gửi lên hay không

            const updatedNew = {
                title,
                subtitle,
                description,
                author,
                tags,
            };

            // Nếu có ảnh được gửi lên, thêm nó vào đối tượng để cập nhật
            if (img) {
                updatedNew.img = img;
            }

            // Tìm và cập nhật bài báo theo ID
            const result = await New.findByIdAndUpdate(
                req.params.id,
                updatedNew,
                { new: true },
            );

            return res.status(200).json({
                message: "New updated successfully",
                data: result,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },

    deleteNewById: async (req, res) => {
        const { id } = req.params;
        try {
            const news = await News.findById(id);
            if (!news) {
                return res.status(404).json({
                    message: "News not found",
                });
            }
            // Xóa ảnh khỏi server nếu có
            if (news.img) {
                const imgPath = news.img.path;
                fs.unlink(imgPath, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
            // Xóa bản ghi News
            await News.findByIdAndDelete(id);
            return res.status(200).json({
                message: "News deleted successfully",
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },
};

module.exports = NewController;
