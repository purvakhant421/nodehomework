const { Hotel } = require("../models");

/**
 * Create Hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
const createHotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

/**
 * Get Hotel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Hotel>}
 */
const getHotelList = async (filter, options) => {

  return Hotel.find({$or:[{is_active:true}]})
};

/**
 * Get hotel by email
 * @param {string} email
 * @returns {Promise<Hotel>}
 */
const getHotelByEmail = async (email) => {
  return Hotel.findOne({ email });
};

/**
 * Get hotel details by id
 * @param {ObjectId} hotelId
 * @returns {Promise<Hotel>}
 */
const getHotelById = async (hotelId) => {
  return Hotel.findById(hotelId);
};


/**
 * Delete hotel
 * @param {ObjectId} hotelId
 * @returns {Promise<Hotel>}
 */
const deleteHotel = async (hotelId) => {
  return Hotel.findByIdAndDelete(hotelId);
};


module.exports = {
  createHotel,
  getHotelList,
  getHotelByEmail,
  getHotelById,
  deleteHotel,
};