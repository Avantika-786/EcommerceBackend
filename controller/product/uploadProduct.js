const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/productModel");

exports.uploadProductController = async (req, res) => {
  try {
    const sessionUser = req.userId;
    // console.log(sessionUser);
    // console.log(uploadProductPermission(sessionUser));
    if (!uploadProductPermission(sessionUser)) {
      throw new Error("Permission Denied");
    }
    // console.log(sessionUser);
    const uploadProduct = new productModel(req.body);
    const saveProduct = await uploadProduct.save();
    res.status(200).json({
      message: "Product Added Successfully",
      data: saveProduct,
      error: false,
      success: true,
    });
  } catch (error) {
    // console.log("Hello");
    console.error("Error : ", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
