const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 100
        },
        description: {
            type: String,
            required: true,
            trim: true,
           
        },
        brand: {
            type: String,
            trim: true
        },
        Category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories',  
            required: true
        },
        status: {
            type: Boolean,
            default: true
        },
        isFeatured: {
            type: Boolean,
            default: false
        },
        isTrending: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
    }
);
 
const Product = mongoose.model('products', productSchema);
module.exports = Product;
