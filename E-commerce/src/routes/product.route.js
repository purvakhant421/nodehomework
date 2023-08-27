const express = require("express");
const { productValidation } = require("../validations")
const { productController } = require("../controllers");
const validate = require("../middlewares/validate");
const router = express.Router();

router.post(
    "/create-product",
    validate(productValidation.create_product),
    productController.create_product
)
router.get(
    "/list",
    productController.get_product_list
)
router.delete(
    "/delete-product/:productId",
    productController.delete_product
)
module.exports = router