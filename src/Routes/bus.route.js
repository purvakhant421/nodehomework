const express = require("express");
const { busValidation } = require("../validations");
const { busController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create bus */
router.post(
  "/create-bus",
  validate(busValidation.createBus),
  busController.createBus
);

/** Get bus list */
router.get(
  "/list",
  validate(busValidation.getBusList),
  busController.getBusList
);

/** Get bus details by id */
router.get(
  "/get-details/:busId",
  validate(busValidation.getDetails),
  busController.getBusDetails
);

/** Delete bus */
router.delete(
  "/delete-bus/:busId",
  validate(busValidation.getDetails),
  busController.deleteBus
);

module.exports = router;