const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/database");
const router = require("./routes/index");
const app = express();
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// Adjust limit as per your requirements

app.use("/api", router);
const PORT = 8080 || process.env.PORT;
app.use(cookieParser());

connectDb();
app.listen(PORT, () => {
  console.log(`Server is running${PORT}`);
});
