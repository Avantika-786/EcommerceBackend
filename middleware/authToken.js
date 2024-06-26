const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authToken = (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Please Log In",
        success: false,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
        });
      }

      req.userId = decoded?._id;
      next();
    });
  } catch (error) {
    console.error("Error in authToken middleware:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
