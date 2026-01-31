const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// 🔗 MongoDB Atlas connection
mongoose.connect(
  "mongodb+srv://Radhika_Tiwari:Nityam12345@cluster0.uxfhin6.mongodb.net/Products_data"
)
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
app.listen(5000, () => {
  console.log("Server running on port 5000");
});