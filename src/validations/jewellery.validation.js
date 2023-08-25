const Joi = require("joi");

/** create jewellery */
const createJewellery = {
  body: Joi.object().keys({
    jewellery_shop_name: Joi.string().required().trim(),
    jewellery_name: Joi.string().required().trim(),
    jewellery_design: Joi.string().required().trim(),
    jewellery_quantity: Joi.number().integer().required(),
  }),
};

/** GEt jewellery list */
const getJewelleryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get jewellery details by id */
const getDetails = {
  params: Joi.object().keys({
    jewelleryId: Joi.string().required().trim(),
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
  createJewellery,
  getJewelleryList,
  getDetails,
  sendMail,
};