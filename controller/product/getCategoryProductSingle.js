const productModel = require("../../models/productModel");

exports.getCategoryProduct = async (req, res) => {
  try {
    const productCategory = await productModel.distinct("category");
    // console.log("Category : ", productCategory);
    // Array to store products of each category
    const productByCategory = [];
    for (const category of productCategory) {
      const product = await productModel.findOne({ category });
      if (product) {
        productByCategory.push(product);
      }
    }
    res.json({
      message: "data send By Category",
      success: true,
      error: false,
      data: productByCategory,
    });
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
