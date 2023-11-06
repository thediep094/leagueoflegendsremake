const PurchaseItem = require("../model/PurchaseItem");
const Wallet = require("../model/Wallet");

const PurchaseItemController = {
    getPurchasedIcons: async (req, res) => {
        const { userId } = req.params;

        try {
            const purchasedItems = await PurchaseItem.find(
                { userId },
                "iconId",
            );

            if (purchasedItems.length > 0) {
                const iconIds = purchasedItems.map((item) => item.iconId);
                return res.status(200).json({
                    message: "Retrieved purchased icons successfully",
                    data: iconIds,
                });
            } else {
                return res.status(200).json({
                    message: "User has not purchased any icons yet",
                    data: [],
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
    createPurchaseItem: async (req, res) => {
        const { userId, iconId } = req.body;

        try {
            // Fetch the user's wallet
            const wallet = await Wallet.findOne({ user: userId });

            if (!wallet) {
                return res.status(404).json({
                    message: "Wallet not found for this user",
                });
            }
            const itemPrice = 1000;
            if (wallet.balance >= itemPrice) {
                wallet.balance -= itemPrice;
                await wallet.save();

                // Create a new purchase item
                const purchaseItem = await PurchaseItem.create({
                    userId,
                    iconId,
                });

                return res.status(200).json({
                    message: "Purchase item created successfully",
                    data: purchaseItem,
                });
            } else {
                return res.status(400).json({
                    message: "Insufficient funds",
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Server error",
                error: error,
            });
        }
    },
};

module.exports = PurchaseItemController;
