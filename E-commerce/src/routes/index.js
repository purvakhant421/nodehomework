const express = require("express");
const userRoute = require("./user.route");
const productRoute = require("./product.route");
const categoryRoute = require("./category.route");
const eCommerceRoute = require("./eCommerce.route");

const router = express.Router();

router.use("/user" , userRoute);
router.use("/product" , productRoute);
router.use("/category" , categoryRoute);
router.use("/all" , eCommerceRoute);

module.exports = router;