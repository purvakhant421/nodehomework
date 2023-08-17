const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");

const categorySchema = new mongoose.Schema(
    {
        category_name : {
            type : String,
            trim :true
        },
        category_desc : {
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

const Category = mongoose.model("category", categorySchema);
module.exports = Category;
