const productModel = require("../../models/productModel");

exports.searchProductController = async (req, res) => {
  try {
    const query = req.query.q;
    const regex = new RegExp(query, "i", "g");
    const product = await productModel.find({
      $or: [
        {
          productName: regex,
        },
        {
          category: regex,
        },
      ],
    });
    res.json({
      data: product,
      success: true,
      error: false,
      message: "Search Product List",
    });
    // console.log(query);
  } catch (error) {
    console.error("Error in SearchProduct: ", error.message);
    res.status(500).json({
      error: true,
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
