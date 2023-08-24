const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const jewellerySchema = new mongoose.Schema(
    {
        jewellery_shop_name : {
            type : String,
            trim :true
        },
        jewellery_name : {
            type : String,
            trim :true
        },
        jewellery_design : {
            type : String,
            trim :true
        },
        jewellery_quantity : {
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

const Jewellery = mongoose.model("jewellery", jewellerySchema);
module.exports = Jewellery;
