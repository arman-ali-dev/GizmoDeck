const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  addProductHandler,
  getAllProductsHandler,
  getProductById,
  updateProductById,
  deleteProductById,
  searchProducts,
  sortProducts,
  filterProducts,
  getFeaturedProducts,
  getTrendingProducts,
  getProductsByCategory,
} = require("../controllers/productController");

router.post("/", authMiddleware, addProductHandler);
router.get("/", getAllProductsHandler);
router.get("/:id", getProductById);
router.patch("/:id", authMiddleware, updateProductById);
router.delete("/:id", authMiddleware, deleteProductById);

router.get("/search", searchProducts);
router.get("/sort", sortProducts);
router.get("/filter", filterProducts);
router.get("/featured", getFeaturedProducts);
router.get("/trending", getTrendingProducts);
router.get("/category/:categoryId", getProductsByCategory);

module.exports = router;
