const cartProduct = require("../../models/cartProduct");
exports.addToCartViewController = async (req, res) => {
  try {
    const currentUser = req.userId;
    const allproducts = await cartProduct
      .find({ userId: currentUser })
      .populate("productId");
    res.json({
      data: allproducts,
      message: "Get Products Of current user",
      error: false,
      success: true,
    });
  } catch (error) {
    console.error("Error in CartViewProducts:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
