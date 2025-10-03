const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  createCategoryHandler,
  getAllCategoriesHandler,
} = require("../controllers/categoryController");

router.post("/", authMiddleware, createCategoryHandler);

router.get("/all", getAllCategoriesHandler);

module.exports = router;
