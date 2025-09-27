const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    name: { type: String, required: true ,unique:true},
    parentId: { type: mongoose.Schema.Types.ObjectId,ref:'categories'},
    cateImg: { type: String, required: false },
    status: { type: Boolean, default: true }
}, { timestamps: true })

categorySchema.index({ name: 1 });

const Category = mongoose.model("categories", categorySchema);
module.exports = Category

