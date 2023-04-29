const Cart = require("../model/Cart");
const mongoose = require("mongoose");
const { createCart } = require("../service/cart.service");
const { options } = require("../route");

const CartController = {
    // taọ hoặc lấy ra cart có sẵn theo userid trong token
    createCartByUserID: async (req, res) => {
        try {
            const id = req.body.verify_id;
            let cart = await createCart(id);
            console.log(cart);
            if (!cart) {
                return res.status(500).json({
                    message: "Server error",
                });
            }
            const pipeline = [
                {
                    $match: {
                        _id: cart._id,
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
                //     $addFields: {
                //         "productList.hello": {
                //             $arrayElemAt: ["$productList.images", 0],
                //         },
                //     },
                // },
                {
                    $project: {
                        createdAt: 0,
                        updatedAt: 0,
                        __v: 0,
                        "list._id": 0,
                        // "productList.images": 0,
                        // "productList.thumbnails": 0,
                        // "productList.images._id": 0,
                        // "productList.createdAt": 0,
                        // "productList.updatedAt": 0,
                        // "productList.__v": 0,
                        // "productList.hello": 0,
                        // "productList.test": {
                        //     $arrayElemAt: ["$productList.images", 0],
                        // },
                    },
                },
            ];
            const data = await Cart.aggregate(pipeline); // bị ExceededMemoryLimit tại đây
            console.log(data[0].productList);
            data[0].productList[0].images = data[0].productList[0].images[0];
            // console.log("images: " + data[0].productList[0].images.length);
            // console.log("hello: " + data[0].productList[0].hello.length);
            return res.status(200).json({
                message: "Get cart thành công",
                cart: data[0],
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
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await Cart.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            if (data) {
                return res.status(200).json({
                    message: "Sửa thông tin cart thành công",
                    cart: data,
                });
            }
            return res.status(404).json({
                message: "Cart không tồn tại",
                cart: data,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    // xóa hết product trong cart
    clear: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await Cart.findByIdAndUpdate(
                id,
                { list: [] },
                {
                    new: true,
                },
            );
            if (data) {
                return res.status(200).json({
                    message: "Sửa thông tin cart thành công",
                    cart: data,
                });
            }
            return res.status(404).json({
                message: "Cart không tồn tại",
                cart: data,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    // add mới một product by id: nếu có thì +1, ko thì thêm
    addProductByID: async (req, res) => {},
    // update product số lượng by id:
    updateProductQuantityByID: async (req, res) => {},
    // xóa product trong cart by id:
    deleteProductByID: async (req, res) => {},
};

module.exports = CartController;
