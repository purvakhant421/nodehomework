const Joi = require("joi");

/** create grocery */
const createGrocery = {
  body: Joi.object().keys({
    grocery_store_name: Joi.string().required().trim(),
    grocery_name: Joi.string().required().trim(),
    grocery_price: Joi.string().required().trim(),
    grocery_quantity: Joi.string().required().trim(),
  }),
};

/** GEt grocery list */
const getGroceryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get grocery details by id */
const getDetails = {
  params: Joi.object().keys({
    groceryId: Joi.string().required().trim(),
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
  createGrocery,
  getGroceryList,
  getDetails,
  sendMail,
};