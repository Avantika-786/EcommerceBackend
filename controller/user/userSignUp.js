const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");

exports.userSignUpController = async (req, res) => {
  try {
    const { email, password, name, profilePic } = req.body;

    // Validate input
    if (!email) {
      throw new Error("Please Provide Email");
    }
    if (!password) {
      throw new Error("Please Provide Password");
    }
    if (!name) {
      throw new Error("Please Provide Username");
    }

    // Check if user already exists
    const user = await userModel.findOne({ email });
    if (user) {
      throw new Error("User Already Exists");
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (!hashPassword) {
      throw new Error("Something went wrong with hashing the password");
    }

    // Prepare user data payload
    const userData = {
      ...req.body,
      password: hashPassword,

      role: "GENERAL",
      // Assuming profilePic is a base64 string or file reference
    };

    // Create a new user using userModel
    const newUser = await userModel.create(userData);
    if (!newUser) {
      console.error("User creation failed");
      throw new Error("User creation failed");
    }
    // Respond with success message and user data
    res.status(200).json({
      success: true,
      data: newUser,
      message: "User Created Successfully",
    });
  } catch (error) {
    // Handle errors and respond with error message
    console.error("Error in userSignUpController:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
