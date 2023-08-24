const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const movieSchema = new mongoose.Schema(
    {
        movie_name : {
            type : String,
            trim :true
        },
        movie_title : {
            type : String,
            trim :true
        },
        movie_director : {
            type : String,
            trim :true
        },
        movie_rating : {
            type : String,
            trim :true
        },
        movie_comment : {
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

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
