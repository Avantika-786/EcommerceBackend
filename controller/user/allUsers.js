const userModel = require("../../models/userModel");
exports.allUsersController = async (req, res) => {
  try {
    console.log(req.userId);
    const allUsers = await userModel.find();
    res.json({
      message: "All User",
      data: allUsers,
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Error in AllUsers:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
