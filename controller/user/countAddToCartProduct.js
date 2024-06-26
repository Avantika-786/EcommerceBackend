const cartProductModel = require("../../models/cartProduct");

exports.countAddProductController = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);
    const count = await cartProductModel.countDocuments({
      userId: userId,
    });
    console.log("Count", count);
    res.json({
      data: {
        count: count,
      },
      message: "Count Done",
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};
