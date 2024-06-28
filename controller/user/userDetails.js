const userModel = require("../../models/userModel");

exports.userDetailsController = async (req, res) => {
  try {
    console.log(req.userId);
    const user = await userModel.findById(req.userId);
    console.log(user);
    res.status(200).json({
      success: true,
      message: "User Details",
      data: user,
    });
    console.log(user);
  } catch (error) {
    console.error("Error in userDetails:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
