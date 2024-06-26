const cartProductModel = require("../../models/cartProduct");

exports.updateAddToCartProduct = async (req, res) => {
  try {
    const currentUser = req.userId;
    const addToCartProductId = req?.body?._id;
    const qty = req.body.quantity;
    const updateProduct = await cartProductModel.updateOne(
      { _id: addToCartProductId },
      {
        ...(qty && { quantity: qty }),
      }
    );
    res.json({
      message: "Product Updated Successfully",
      error: false,
      success: true,
      data: updateProduct,
    });
  } catch (error) {
    res.json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};
