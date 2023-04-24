const Product = require("../model/Product");
const mongoose = require("mongoose");

const ProductController = {
    create: async (req, res) => {
        try {
            const newProduct = await Product.create(req.body);
            return res.status(200).json({
                message: "Tạo sản phẩm thành công",
                product: newProduct,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
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
            const { page, limit } = req.query;

            const aggregateQuery = [
                { $sort: { createdAt: -1 } },

                { $skip: (Number(page) - 1) * Number(limit) },

                { $limit: Number(limit) },
            ];

            const productData = await Product.aggregate(aggregateQuery);

            if (productData.length > 0) {
                return res.status(200).json({
                    message: "Thành công",
                    data: productData,
                });
            }
            return res.status(404).json({
                message: "Không có sản phẩm nào",
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
};

module.exports = ProductController;
