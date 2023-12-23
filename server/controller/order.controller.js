const Order = require("../model/Order");
const mongoose = require("mongoose");

const OrderController = {
    createOrder: async (req, res) => {
        try {
            const { userID, items, total, status } = req.body;

            const newOrder = await Order.create({
                userID,
                items,
                total,
                status,
            });
            return res.status(201).json({
                message: "Created order successfully",
                data: newOrder,
            });
        } catch (error) {
            console.log("Lỗi ở hàm createOrder:");
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },
    // get by order id
    getOrdersByID: async (req, res) => {
        try {
            const id = req.params.id;

            const orders = await Order.findOne({ _id: id }).populate(
                "items.product",
            );
            if (orders == null) {
                return res.status(404).json({
                    message: "Order không tồn tại",
                });
            }
            return res.status(200).json({
                message: "Get order by id successfully",
                data: orders,
            });
        } catch (error) {
            console.log("Lỗi ở hàm getOrdersByID:");
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },
    //get by user id
    getOrdersByUser: async (req, res) => {
        try {
            const userID = req.body.verify_id;
            // console.log(userID);
            const orders = await Order.find({ userID }).populate(
                "items.product",
            );
            if (orders.length == 0) {
                return res.status(404).json({
                    message: "Không tìm thấy order nào",
                });
            }
            return res.status(200).json({
                message: "Get order by id successfully",
                data: orders,
            });
        } catch (error) {
            console.log("Lỗi ở hàm getOrdersByUser:");
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },
    getAllOrders: async (req, res) => {
        try {
            const orders = await Order.find()
                .sort({ updatedAt: -1 })

                .populate({
                    path: "userID",
                    select: "username", // Select the fields you want to populate
                })
                .populate("items.product");
            return res.status(200).json({
                message: "Get all orders successfully",
                data: orders,
            });
        } catch (error) {
            console.log("Error in getAllOrders function:", error);
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },

    setStatusForOrder: async (req, res) => {
        try {
            const { orderId, status } = req.body;

            // Check if the provided status is one of the allowed values
            const allowedStatusValues = ["new", "done", "delivery"];
            if (!allowedStatusValues.includes(status)) {
                return res.status(400).json({
                    message: "Invalid status value",
                });
            }

            const order = await Order.findByIdAndUpdate(
                orderId,
                { status },
                { new: true },
            );

            if (!order) {
                return res.status(404).json({
                    message: "Order not found",
                });
            }

            return res.status(200).json({
                message: "Set status for order successfully",
                data: order,
            });
        } catch (error) {
            console.log("Error in setStatusForOrder function:", error);
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },

    // delete order by ID
    deleteOrderById: async (req, res) => {
        try {
            const orderId = req.params.id;

            // Check if the provided orderId is a valid MongoDB ObjectId
            if (!mongoose.Types.ObjectId.isValid(orderId)) {
                return res.status(400).json({
                    message: "Invalid Order ID",
                });
            }

            const deletedOrder = await Order.findByIdAndDelete(orderId);

            if (!deletedOrder) {
                return res.status(404).json({
                    message: "Order not found",
                });
            }

            return res.status(200).json({
                message: "Order deleted successfully",
                data: deletedOrder,
            });
        } catch (error) {
            console.log("Error in deleteOrderById function:", error);
            return res.status(500).json({
                message: "Server error",
                error,
            });
        }
    },
};

module.exports = OrderController;
