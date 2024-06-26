const bcrypt = require("bcryptjs");
const userModel = require("../../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.userSignInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    console.log("checkPassoword", checkPassword);

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: "24h",
      });

      const tokenOption = {
        httpOnly: true, // Secure cookies only in production
        sameSite: "None",
        secure: true,
        // domain: process.env.BACKEND_URL,
      };

      res.cookie("token", token, tokenOption).status(200).json({
        message: "Login successfully",
        data: token,

        success: true,
        error: false,
      });
      console.log("Login successful");
    } else {
      throw new Error("Please check Password");
    }
  } catch (err) {
    console.log("Error in userSignIn:", err.message),
      res.json({
        message: err.message || err,
        error: true,
        success: false,
      });
  }
};
