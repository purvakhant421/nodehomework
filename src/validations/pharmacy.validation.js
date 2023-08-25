const Joi = require("joi");

/** create pharmacy */
const createPharmacy = {
  body: Joi.object().keys({
    pharmacy_name: Joi.string().required().trim(),
    pharmacy_address: Joi.string().required().trim(),
    pharmacy_product_name: Joi.string().required().trim(),
    pharmacy_product_price: Joi.number().integer().required(),
  }),
};

/** GEt pharmacy list */
const getPharmacyList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get pharmacy details by id */
const getDetails = {
  params: Joi.object().keys({
    pharmacyId: Joi.string().required().trim(),
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
  createPharmacy,
  getPharmacyList,
  getDetails,
  sendMail,
};