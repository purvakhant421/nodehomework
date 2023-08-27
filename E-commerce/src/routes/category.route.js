const express = require("express");
const { categoryValidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate = require("../middlewares/validate")

const router = express.Router()
router.get(
    "/list",
    categoryController.category_list
)
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.create_category
)
router.delete(
    "/delete-category/:categoryId",
    categoryController.delete_category
)

module.exports = router;