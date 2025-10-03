const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  addProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductByIdHandler,
  deleteProductByIdHandler,
  searchProductsHandler,
  sortProductsHandler,
  filterProductsHandler,
  getFeaturedProductsHandler,
  getTrendingProductsHandler,
  getProductsByCategoryHandler,
} = require("../controllers/productController");

router.post("/", authMiddleware, addProductHandler);
router.get("/", getAllProductsHandler);
router.get("/:id", getProductByIdHandler);
router.patch("/:id", authMiddleware, updateProductByIdHandler);
router.delete("/:id", authMiddleware, deleteProductByIdHandler);

router.get("/search", searchProductsHandler);
router.get("/sort", sortProductsHandler);
router.get("/filter", filterProductsHandler);
router.get("/featured", getFeaturedProductsHandler);
router.get("/trending", getTrendingProductsHandler);
router.get("/category/:categoryId", getProductsByCategoryHandler);

module.exports = router;
