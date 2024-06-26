const productModel = require("../../models/productModel");
exports.getProductController = async (req, res) => {
  try {
    const allProducts = await productModel.find().sort({ createdAt: -1 });
    res.json({
      message: "All Products",
      success: true,
      error: false,
      data: allProducts,
    });
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
