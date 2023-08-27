const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require('../middlewares/validate');

const router = express.Router();
/** create user */
router.post(
    "/create-user",
    validate(userValidation.create_user),
    userController.create_user
);
/** Get user list */
router.get(
    "/list",
    validate(userValidation.get_user_list),
    userController.get_user_list
);
router.delete(
    "/delete-user/:userId",
    userController.delete_user
)

module.exports = router;