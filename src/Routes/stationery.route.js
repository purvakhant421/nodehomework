const express = require("express");
const { stationeryValidation } = require("../validations");
const { stationeryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create stationery */
router.post(
  "/create-stationery",
  validate(stationeryValidation.createStationery),
  stationeryController.createStationery
);

/** Get stationery list */
router.get(
  "/list",
  validate(stationeryValidation.getStationeryList),
  stationeryController.getStationeryList
);

/** Get stationery details by id */
router.get(
  "/get-details/:stationeryId",
  validate(stationeryValidation.getDetails),
  stationeryController.getStationeryDetails
);

/** Delete stationery */
router.delete(
  "/delete-stationery/:stationeryId",
  validate(stationeryValidation.getDetails),
  stationeryController.deleteStationery
);

module.exports = router;