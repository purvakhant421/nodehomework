const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const travelSchema = new mongoose.Schema(
    {
        travel_name : {
            type : String,
            trim :true
        },
        travel_destination : {
            type : String,
            trim :true
        },
        travel_passenger_name : {
            type : String,
            trim :true
        },
        travel_passenger_age : {
            type : Number,
            default : 0
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

const Travel = mongoose.model("travel", travelSchema);
module.exports = Travel;
