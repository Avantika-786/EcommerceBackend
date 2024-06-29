const express = require("express");
const router = express.Router();

const { userSignUpController } = require("../controller/user/userSignUp");
const { userSignInController } = require("../controller/user/userSignIn");
const { userDetailsController } = require("../controller/user/userDetails");
const { userLogoutController } = require("../controller/user/userLogout");
const { authToken } = require("../middleware/authToken");
const { allUsersController } = require("../controller/user/allUsers");
const { updateUserController } = require("../controller/user/updateUser");
const {
  uploadProductController,
} = require("../controller/product/uploadProduct");
const { getProductController } = require("../controller//product/getProduct");
const {
  updateProductController,
} = require("../controller//product/updateProduct");
const {
  getCategoryProduct,
} = require("../controller/product/getCategoryProductSingle");
const {
  getCategoryWiseProduct,
} = require("../controller/product/getCategoryWiseProduct");
const {
  getProductDeatilsController,
} = require("../controller/product/getProductDetails");
const { addToCartController } = require("../controller/user/addToCart");
const {
  countAddProductController,
} = require("../controller/user/countAddToCartProduct");
const { addToCartViewController } = require("../controller/user/addToCartView");
const {
  updateAddToCartProduct,
} = require("../controller/user/updateAddToCartProduct");
const {
  deleteAddToCartProduct,
} = require("../controller/user/deleteAddToCartProduct");
const {
  searchProductController,
} = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");
router.post("/signup", userSignUpController);
router.post("/login", userSignInController);
router.get("/userDetails", authToken, userDetailsController);
router.get("/userLogout", userLogoutController);
router.get("/allUsers", authToken, allUsersController);
router.post("/updateUser", updateUserController);
router.post("/uploadProduct", authToken, uploadProductController);
router.get("/getProduct", getProductController);
router.post("/updateProduct", authToken, updateProductController);
router.get("/getCategoryProduct", getCategoryProduct);
router.post("/categoryProduct", getCategoryWiseProduct);
router.post("/productDetails", getProductDeatilsController);
router.post("/addToCart", authToken, addToCartController);
router.get("/countProduct", authToken, countAddProductController);
router.get("/cartViewProduct", authToken, addToCartViewController);
router.post("/updateCartProduct", authToken, updateAddToCartProduct);
router.post("/deleteCartProduct", authToken, deleteAddToCartProduct);
router.get("/searchProduct", searchProductController);
router.post("/filterProduct", filterProductController);
module.exports = router;
