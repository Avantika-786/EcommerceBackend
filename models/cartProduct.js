const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productId: { ref: "product", type: String },

    quantity: Number,
    userId: String,
  },
  {
    timestamps: true,
  }
);

const cartProductModel = mongoose.model("addToCart", productSchema);
module.exports = cartProductModel;
