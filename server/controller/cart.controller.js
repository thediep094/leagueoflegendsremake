const Cart = require("../model/Cart");
const mongoose = require("mongoose");
const { createCart } = require("../service/cart.service");

const CartController = {
    // taọ hoặc lấy ra cart có sẵn theo userid trong token
    createCartByUserID: async (req, res) => {
        const id = req.body.verify_id;
        let cart = await createCart(id);
        if (!cart) {
            return res.status(500).json({
                message: "Server error",
            });
        }
        const pipeline = [
            {
                $match: {
                    _id: cart.id,
                },
            },
            {
                $lookup: {
                    from: "products",
                    localField: "list.productID",
                    foreignField: "_id",
                    as: "productList",
                },
            },
            // {
            //     $project: {
            //     },
            // },
        ];
        try {
            const data = await Cart.aggregate(pipeline);
            return res.status(200).json({
                message: "Get cart thành công",
                cart: cart,
                data: data,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    // trả về cart theo id
    getCartByID: async (req, res) => {
        try {
            const { id } = req.params;
            const cart = await Cart.findById(id);
            if (cart) {
                return res.status(200).json({
                    message: "Tìm thấy cart",
                    data: cart,
                });
            }
            return res.status(404).json({
                message: "Cart không tồn tại",
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    // update
    update: async (req, res) => {},
    // xóa hết product trong cart
    clear: async (req, res) => {},
    // xóa một hoặc nhiều product trong cart
    deleteProduct: async (req, res) => {},
};

module.exports = CartController;
