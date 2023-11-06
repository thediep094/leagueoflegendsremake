const Product = require("../model/Product");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const ProductController = {
    create: async (req, res) => {
        try {
            const { images, thumbnails } = req.files;
            const savedImages = images.map((image) => {
                const imagePath = path.join(image.originalname);
                return imagePath;
            });
            const savedThumbnails = thumbnails.map((thumbnail) => {
                const thumbnailPath = path.join(thumbnail.originalname);
                return thumbnailPath;
            });
            req.body.images = savedImages;
            req.body.thumbnails = savedThumbnails;
            const newProduct = await Product.create(req.body);
            return res.status(200).json({
                message: "Tạo sản phẩm thành công",
                product: newProduct,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },
    getProductByID: async (req, res) => {
        try {
            const { id } = req.params;
            const productData = await Product.findById(id);
            if (productData) {
                return res.status(200).json({
                    message: "Thành công",
                    data: productData,
                });
            }
            return res.status(404).json({
                message: "Sản phẩm không tồn tại",
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    getAllProduct: async (req, res) => {
        try {
            const { page, limit, tag, search } = req.query;

            const aggregateQuery = [];

            if (tag) {
                aggregateQuery.push({
                    $match: { tags: tag }, // Assuming 'tags' is the field where tags are stored
                });
            }

            if (search) {
                aggregateQuery.push({
                    $match: { name: { $regex: new RegExp(search, "i") } }, // Assuming 'name' is the field you want to search
                });
            }

            aggregateQuery.push(
                { $skip: (Number(page) - 1) * Number(limit) },
                { $limit: Number(limit) },
            );

            const productData = await Product.aggregate(
                aggregateQuery,
            ).allowDiskUse(true);

            if (productData.length > 0) {
                return res.status(200).json({
                    message: "Thành công",
                    data: productData,
                });
            }
            return res.status(404).json({
                message: "Không có sản phẩm nào",
                data: [],
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;

            const { images, thumbnails } = req.files;
            const savedImages = images.map((image) => {
                const imagePath = path.join(image.originalname);
                return imagePath;
            });
            const savedThumbnails = thumbnails.map((thumbnail) => {
                const thumbnailPath = path.join(thumbnail.originalname);
                return thumbnailPath;
            });
            req.body.images = savedImages;
            req.body.thumbnails = savedThumbnails;
            const data = await Product.findByIdAndUpdate(id, req.body);
            if (data) {
                return res.status(200).json({
                    message: "Sửa thông tin sản phẩm thành công",
                });
            }
            return res.status(404).json({
                message: "Sản phẩm không tồn tại",
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await Product.findByIdAndDelete(id);
            if (data) {
                return res.status(200).json({
                    message: "Xoá sản phẩm thành công",
                });
            }
            return res.status(404).json({
                message: "Sản phẩm không tồn tại",
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    getAllTags: async (req, res) => {
        console.log("tags");
        try {
            const tags = await Product.distinct("tags").exec();
            res.status(200).json({
                message: "Success",
                data: tags,
            });
        } catch (error) {
            res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
};

module.exports = ProductController;
