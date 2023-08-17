const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name : {
            type : String,
            trim :true
        },
        product_price :{
            type : Number,
            trim :true
        },
        product_desc : {
            type : String,
            trim :true
        },
        is_active: {
            type: Boolean,
            default: true,
          },
    },
    {
        timestamps: true,
        versionKey: false,
      }
);
const Product = mongoose.model("product", productSchema);
module.exports = Product;