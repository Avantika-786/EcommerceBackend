const userModel = require("../models/userModel");
const uploadProductPermission = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    console.log(user);
    if (user.role === "ADMIN") {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

module.exports = uploadProductPermission;
