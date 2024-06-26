const cartProductModel = require("../../models/cartProduct");

exports.addToCartController = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentUser = req.userId;
    const isProductAvailable = await cartProductModel.findOne({
      productId,
    });
    // console.log("Is Available : ", isProductAvailable);
    // console.log("CurrentUser", currentUser);
    if (isProductAvailable) {
      return res.json({
        message: "Already Exists in your cart",
        success: false,
        error: true,
      });
    }
    const payload = {
      productId: productId,
      quantity: 1,
      userId: currentUser,
    };
    const newAddToCart = new cartProductModel(payload);
    const saveProduct = await newAddToCart.save();
    res.json({
      data: saveProduct,
      message: "Product Added in cart",
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message || "Something Went Wrong",
      success: false,
      error: true,
    });
  }
};
