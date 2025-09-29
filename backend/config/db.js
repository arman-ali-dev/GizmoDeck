const mongoose = require("mongoose");
require("dotenv").config();

const database = async () => {
  const conn = mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection error:", err));
};

module.exports = database;
