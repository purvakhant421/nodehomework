const Joi = require("joi");

/** create stationery */
const createStationery = {
  body: Joi.object().keys({
    stationery_name: Joi.string().required().trim(),
    stationery_address: Joi.string().required().trim(),
    stationery_items_name: Joi.string().required().trim(),
    stationery_items_price: Joi.string().required().trim(),
  }),
};

/** GEt stationery list */
const getStationeryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get stationery details by id */
const getDetails = {
  params: Joi.object().keys({
    stationeryId: Joi.string().required().trim(),
  }),
};


/** Send mail */
const sendMail = {
  body: Joi.object({
    email: Joi.string().required().trim().email(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim(),
  }),
};

module.exports = {
  createStationery,
  getStationeryList,
  getDetails,
  sendMail,
};