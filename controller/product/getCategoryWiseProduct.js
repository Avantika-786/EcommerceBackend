const productModel = require("../../models/productModel");

exports.getCategoryWiseProduct = async (req, res) => {
  try {
    const { category } = req?.body;
    const product = await productModel.find({ category });
    res.json({
      data: product,
      message: "Product Extracted from Category wise",
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
