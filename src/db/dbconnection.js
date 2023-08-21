const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
  mongoose
    .connect("mongodb+srv://purvaratanapara48:8IUzYi6lS8S14D0j@cluster0.srcxaob.mongodb.net/", config.mongodb.options)
    .then((data) => {
      console.log("Database connection successfully!");
    })
    .catch((error) => {
      console.log("Database connetion error: ", error);
    });
};

module.exports = { connectDB };