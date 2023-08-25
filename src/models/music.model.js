const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const musicSchema = new mongoose.Schema(
    {
        music_name : {
            type : String,
            trim :true
        },
        music_artist : {
            type : String,
            trim :true
        },
        music_album : {
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

const Music = mongoose.model("music", musicSchema);
module.exports = Music;
