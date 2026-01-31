const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes"); // import route

const app = express(); // app ko pehle initialize karo

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", productRoutes); // ab app use kar sakte ho

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Atlas connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});