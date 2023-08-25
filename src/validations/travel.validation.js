const Joi = require("joi");

/** create travel */
const createTravel = {
  body: Joi.object().keys({
    travel_name: Joi.string().required().trim(),
    travel_destination: Joi.string().required().trim(),
    travel_passenger_name: Joi.string().required().trim(),
    travel_passenger_age: Joi.number().integer().required(),
  }),
};

/** GEt travel list */
const getTravelList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get travel details by id */
const getDetails = {
  params: Joi.object().keys({
    travelId: Joi.string().required().trim(),
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
  createTravel,
  getTravelList,
  getDetails,
  sendMail,
};