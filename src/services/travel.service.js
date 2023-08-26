const { Travel } = require("../models");

/**
 * Create travel
 * @param {object} reqBody
 * @returns {Promise<Travel>}
 */
const createTravel = async (reqBody) => {
  return Travel.create(reqBody);
};

/**
 * Get travel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Travel>}
 */
const getTravelList = async (filter, options) => {
  //const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Travel.find({$or:[{is_active:true}]})
};

/**
 * Get travel by email
 * @param {string} email
 * @returns {Promise<Travel>}
 */
const getTravelByEmail = async (email) => {
  return Travel.findOne({ email });
};

/**
 * Get travel details by id
 * @param {ObjectId} travelId
 * @returns {Promise<Travel>}
 */
const getTravelById = async (travelId) => {
  return Travel.findById(travelId);
};

/**
 * Delete travel
 * @param {ObjectId} travelId
 * @returns {Promise<Travel>}
 */
const deleteTravel = async (travelId) => {
  return Travel.findByIdAndDelete(travelId);
};



module.exports = {
  createTravel,
  getTravelList,
  getTravelByEmail,
  getTravelById,
  deleteTravel,
};