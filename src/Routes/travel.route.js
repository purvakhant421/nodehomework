const express = require("express");
const { travelValidation } = require("../validations");
const { travelController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create travel */
router.post(
  "/create-travel",
  validate(travelValidation.createTravel),
  travelController.createTravel
);

/** Get travel list */
router.get(
  "/list",
  validate(travelValidation.getTravelList),
  travelController.getTravelList
);

/** Get travel details by id */
router.get(
  "/get-details/:travelId",
  validate(travelValidation.getDetails),
  travelController.getTravelDetails
);

/** Delete travel */
router.delete(
  "/delete-travel/:travelId",
  validate(travelValidation.getDetails),
  travelController.deleteTravel
);

module.exports = router;