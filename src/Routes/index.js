const express = require("express");
//const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const bookRoute = require("./book.route.js");
const hotelRoute = require("./hotel.route.js");
const busRoute = require("./bus.route.js");
const stationeryRoute = require("./stationery.route.js");
const schoolRoute = require("./school.route.js");
const travelRoute = require("./travel.route.js");
const pharmacyRoute = require("./pharmacy.route.js");
const jewelleryRoute = require("./jewellery.route.js");
const movieRoute = require("./movie.route.js");
const musicRoute = require("./music.route.js");
const groceryRoute = require("./grocery.route.js");

const router = express.Router();

//router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/book",bookRoute);
router.use("/hotel",hotelRoute);
router.use("/bus",busRoute);
router.use("/stationery",stationeryRoute);
router.use("/school",schoolRoute);
router.use("/travel",travelRoute);
router.use("/pharmacy",pharmacyRoute);
router.use("/jewellery",jewelleryRoute);
router.use("/movie",movieRoute);
router.use("/music",musicRoute);
router.use("/grocery",groceryRoute);






module.exports = router;