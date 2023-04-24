const Product = require("../model/Product");
const mongoose = require("mongoose");


const ProductController = {

    create: async (req, res) => {
//     {
//     "name": "Test product",
//     "price": 1234.56,
//     "compare_at_price": 1500.00,
//     "description": "Test des",
//     "img": "Test img",
//     "estimate_ship_date": "",
//     "tagId": ["1", "2"]
// }
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
            const data = await Product.findById(id);
            if (data) {
                return res.status(200).json({
                    message: "Thành công",
                    product: data,
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
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await Product.findByIdAndUpdate(id, req.body);
            if (data) {
                return res.status(200).json({
                    message: "Sửa thông tin sản phẩm thành công",
                    product: data,
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
