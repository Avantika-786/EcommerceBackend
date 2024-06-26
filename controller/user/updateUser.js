const userModel = require("../../models/userModel");
exports.updateUserController = async (req, res) => {
  try {
    const sessionUser = req.userId;
    console.log(sessionUser);
    const { userId, role, email, name } = req.body;
    console.log("req body", req.body);
    console.log("User Body : ", req.body);
    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    };
    // console.log(payload);
    // console.log("Hello User");
    const user = await userModel.findById(userId);
    // console.log("User", user);
    // console.log("user.role", user.role);
    const updateUser = await userModel.findByIdAndUpdate(userId, payload);

    res.json({
      data: updateUser,
      message: "User Updated",
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Error in updateUser:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
