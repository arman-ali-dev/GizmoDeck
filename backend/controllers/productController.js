const Product = require("../models/productModel");

const addProductHandler = async (req, res) => {
  try {
    const { name, description, brand, images, category, variants } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ status: "error", message: "Name is required!" });
    }

    if (!description) {
      return res.status(400).json({
        status: "error",
        message: "Description is required!",
      });
    }

    if (!brand) {
      return res
        .status(400)
        .json({ status: "error", message: "Description is required!" });
    }

    if (!images || images.length === 0) {
      return res.status(400).json({
        status: "error",
        message: "At least one image is required!",
      });
    }

    if (!category) {
      return res.status(400).json({
        status: "error",
        message: "Category is required!",
      });
    }

    const product = await Product.create({
      name,
      description,
      brand,
      images,
      category,
      variants,
    });

    return res.status(201).json({
      status: "success",
      message: "Product add successfully!",
      product,
    });
  } catch (error) {
    console.log("Add product error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const getAllProductsHandler = async (_, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({
      status: "success",
      message: "Products fetch successfully!",
      products,
    });
  } catch (error) {
    console.log("Get all products error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const getProductByIdHandler = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findOne({ _id: productId });

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Product is not found with this id!",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Product fetch successfully with id!",
      product,
    });
  } catch (error) {
    console.log("Get product by id error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const updateProductByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, brand, images, category, variants } = req.body;

    const updateData = {};

    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (brand) updateData.brand = brand;
    if (images) updateData.images = images;
    if (category) updateData.category = category;
    if (variants) updateData.variants = variants;

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found!" });
    }

    return res.status(200).json({
      status: "success",
      message: "Product updated successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    console.log("Update product error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const deleteProductByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found!" });
    }

    return res.status(200).json({
      status: "success",
      message: "Product deleted successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    console.log("Delete product error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const filterProductsHandler = async (req, res) => {
  try {
    const { brand, category, inStock, minPrice, maxPrice } = req.query;

    let filters = {};

    if (brand) filters.brand = brand;
    if (category) filters.category = category;
    if (inStock) filters["variants.stock"] = { $gt: 0 };

    if (minPrice || maxPrice) {
      filters["variants.price"] = {};

      if (minPrice) filters["variants.price"].$gte = Number(minPrice);
      if (maxPrice) filters["variants.price"].$lte = Number(maxPrice);
    }

    const products = await Product.find(filters).populate("category");

    return res.status(200).json({
      status: "success",
      message: "Products filtered successfully!",
      count: products.length,
      products,
    });
  } catch (error) {
    console.log("Filter products error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const searchProductsHandler = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({
        status: "error",
        message: "Search query is required!",
      });
    }

    const products = await Product.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { brand: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ],
    });

    return res.status(200).json({
      status: "success",
      message: "Product searched successfully!",
      count: products.length,
      products,
    });
  } catch (error) {
    console.log("Search products error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const sortProductsHandler = async (req, res) => {
  try {
    const { sortBy, order } = req.query;

    const sortCriteria = {};

    if (sortBy) {
      sortCriteria[sortBy] = order === "desc" ? -1 : 1;
    }

    const products = await Product.find({}).sort(sortCriteria);

    return res.status(200).json({
      status: "success",
      message: "Product sorted successfully!",
      count: products.length,
      products,
    });
  } catch (error) {
    console.log("Sort products error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const getFeaturedProductsHandler = async (_, res) => {
  try {
    const featuredProducts = await Product.find({ isFeatured: true });

    return res.status(200).json({
      status: "success",
      message: "Featured products fetched successfully!",
      products: featuredProducts,
    });
  } catch (error) {
    console.log("Get featured products error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const getTrendingProductsHandler = async (_, res) => {
  try {
    const trendingProducts = await Product.find({ isTrending: true });

    return res.status(200).json({
      status: "success",
      message: "Trending products fetched successfully!",
      products: trendingProducts,
    });
  } catch (error) {
    console.log("Get trending products error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const getProductsByCategoryHandler = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const products = await Product.find({ category: categoryId });

    return res.status(200).json({
      status: "success",
      message: "Products fetched by category successfully!",
      products,
    });
  } catch (error) {
    console.error("Get products by category error:", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

module.exports = {
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
  getProductsByCategoryHandler,
};
