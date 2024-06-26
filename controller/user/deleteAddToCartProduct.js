const cartProductModel = require("../../models/cartProduct");

exports.deleteAddToCartProduct = async (req, res) => {
  try {
    const currentUser = req.userId;
    const addToCartProductId = req?.body?._id;
    const deleteProduct = await cartProductModel.deleteOne({
      _id: addToCartProductId,
    });

    res.json({
      message: "Product Deleted From Cart",
      error: false,
      success: true,
      data: deleteProduct,
    });
  } catch (error) {
    res.json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};
