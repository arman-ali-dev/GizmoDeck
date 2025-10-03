const Category = require("../models/categoryModel");

const createCategoryHandler = async (req, res) => {
  try {
    const { name, title, description, parentId, cateImg } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ status: "error", message: "Name is required!" });
    }

    if (!title) {
      return res
        .status(400)
        .json({ status: "error", message: "Title is required!" });
    }

    if (!cateImg) {
      return res
        .status(400)
        .json({ status: "error", message: "Category Image is required!" });
    }

    const category = await Category.create({
      name,
      title,
      description,
      cateImg,
      parentId: parentId ? parentId : null,
    });

    return res.status(201).json({
      status: "success",
      message: "Category created successfully!",
      category,
    });
  } catch (error) {
    console.log("Create category error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const getCategoryByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res
        .status(404)
        .json({ status: "error", message: "Category not found!" });
    }

    return res.status(200).json({
      status: "success",
      message: "Category fetched by id successfully!",
      category,
    });
  } catch (error) {
    console.log("Get category by id error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const getAllCategoriesHandler = async (_, res) => {
  try {
    const categories = await Category.find({});

    return res.status(200).json({
      status: "success",
      message: "All categories fetched successfully!",
      categories,
    });
  } catch (error) {
    console.log("Get all categories error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const updateCategoryByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, description, cateImg, parentId } = req.body;

    const updateData = {};

    if (name) updateData.name = name;
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (cateImg) updateData.cateImg = cateImg;
    if (parentId) updateData.parentId = parentId;

    const updatedCategory = await Category.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedCategory) {
      return res
        .status(404)
        .json({ status: "error", message: "Category not found!" });
    }

    return res.status(200).json({
      status: "success",
      message: "Category updated successfully!",
      category: updatedCategory,
    });
  } catch (error) {
    console.log("Update category error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const deleteCategoryByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res
        .status(404)
        .json({ status: "error", message: "Category not found!" });
    }

    return res
      .status(200)
      .json({ status: "success", message: "Category deleted successfully!" });
  } catch (error) {
    console.log("Delete category error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const getActiveCategoriesHandler = async (_, res) => {
  try {
    const categories = await Category.find({ status: true });

    return res.status(200).json({
      status: "success",
      message: "All active categories fetched successfully!",
      categories,
    });
  } catch (error) {
    console.log("Get all active categories error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Server Error!",
      error: error.message,
    });
  }
};

const getParentCategoriesHandler = async (req, res) => {};

const getSubCategoriesHandler = async (req, res) => {};

module.exports = {
  createCategoryHandler,
  getCategoryByIdHandler,
  getAllCategoriesHandler,
  updateCategoryByIdHandler,
  deleteCategoryByIdHandler,
  getActiveCategoriesHandler,
  getParentCategoriesHandler,
  getSubCategoriesHandler,
};
