const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    })
    .then(() => {
      console.log("DATABASE connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDb;
