exports.userLogoutController = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Log Out Successfully",
      data: [],
    });
  } catch (error) {
    console.error("Error in userLogout:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
