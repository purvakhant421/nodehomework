const Joi = require("joi");

/** create bus */
const createBus = {
  body: Joi.object().keys({
    bus_name: Joi.string().required().trim(),
    bus_route: Joi.string().required().trim(),
    bus_number: Joi.string().required().trim(),
    bus_ticket_price: Joi.string().required().trim(),
  }),
};

/** GEt bus list */
const getBusList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get bus details by id */
const getDetails = {
  params: Joi.object().keys({
    busId: Joi.string().required().trim(),
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
  createBus,
  getBusList,
  getDetails,
  sendMail,
};