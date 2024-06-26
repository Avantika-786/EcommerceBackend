const productModel = require("../../models/productModel");

exports.getProductDeatilsController = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({
      message: "Product Details Fetched",
      success: true,
      error: false,
      data: product,
    });
  } catch (error) {
    console.error("Error in getProductDeatils: ", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
