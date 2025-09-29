const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    }, // unique category name

    title: {
      type: String,
      trim: true,
    }, // optional UI title

    description: {
      type: String,
      trim: true,
    },

    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // self reference for subcategories
      default: null,
    },

    cateImg: {
      type: String,
    },

    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// index on name for faster search
categorySchema.index({ name: 1 });

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
