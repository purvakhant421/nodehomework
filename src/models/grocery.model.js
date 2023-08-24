const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const grocerySchema = new mongoose.Schema(
    {
        grocery_store_name : {
            type : String,
            trim :true
        },
        grocery_name : {
            type : String,
            trim :true
        },
        grocery_price : {
            type : String,
            trim :true
        },
        grocery_quantity : {
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

const Grocery = mongoose.model("grocery", grocerySchema);
module.exports = Grocery;
