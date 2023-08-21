const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const bookSchema = new mongoose.Schema(
    {
        book_name : {
            type : String,
            trim :true
        },
        book_writer : {
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

const Book = mongoose.model("book", bookSchema);
module.exports = Book;
