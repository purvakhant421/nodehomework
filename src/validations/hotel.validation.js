const Joi = require("joi");

/** create hotel */
const createHotel = {
  body: Joi.object().keys({
    hotel_name: Joi.string().required().trim(),
    hotel_address: Joi.string().required().trim(),
    hotel_location: Joi.string().required().trim(),
    hotel_service: Joi.string().required().trim(),
    hotel_rating: Joi.number().integer().required(),
  }),
};

/** GEt hotel list */
const getHotelList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get hotel details by id */
const getDetails = {
  params: Joi.object().keys({
    hotelId: Joi.string().required().trim(),
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
  createHotel,
  getHotelList,
  getDetails,
  sendMail,
};