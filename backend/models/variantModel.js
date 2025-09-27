const mongoose = require("mongoose");

const productVariantSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    variantName: {
      type: String,
      required: false,
      trim: true,
    },
    sku: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    item_code: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: String,
      required: false,
    },
    salePrice: {
      type: Number,
      min: 0,
      default: null,
    },
    isprimary: {
      type: Boolean,
      default: false,
    },
    stock: {
      quantity: {
        type: Number,
        required: false,
        min: 0,
      },
      lowStockThreshold: {
        type: Number,
        default: 5,
      },
      status: {
        type: String,
        enum: ["in_stock", "out_of_stock", "low_stock"],
        default: "in_stock",
      },
    },
    images: [
      {
        url: { type: String, required: true },
        altText: { type: String, trim: true },
        primary: { type: Boolean, default: false },
      },
    ],
    size: [
      {
        sizeName: { type: String },
        quantity: { type: Number },
      },
    ],
    attributes: {
      type: Map,
      of: String,
    },
  },
  {
    timestamps: true,
  }
);

productVariantSchema.pre("save", function (next) {
  if (this.size && Array.isArray(this.size)) {
    this.stock.quantity = this.size.reduce(
      (total, size) => total + (size.quantity || 0),
      0
    );
  }
  if (this.stock.quantity <= 0) {
    this.stock.status = "out_of_stock";
  } else if (this.stock.quantity <= this.stock.lowStockThreshold) {
    this.stock.status = "low_stock";
  } else {
    this.stock.status = "in_stock";
  }
  next();
});

productVariantSchema.index({ sku: 1 });
productVariantSchema.index({ product: 1 });
productVariantSchema.index({ "stock.status": 1 });

const ProductVariant = mongoose.model("product_variants", productVariantSchema);
module.exports = ProductVariant;
