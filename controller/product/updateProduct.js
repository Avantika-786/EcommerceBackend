const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/productModel");

exports.updateProductController = async (req, res) => {
  try {
    if (!uploadProductPermission(req.userId)) {
      throw new Error("Permission Denied");
    }
    // const productId = req?._id;
    const { _id, ...resBody } = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(_id, resBody);
    res.json({
      message: "Product Updated Successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
