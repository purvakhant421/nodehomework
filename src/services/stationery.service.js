const { Stationery } = require("../models");

/**
 * Create stationery
 * @param {object} reqBody
 * @returns {Promise<Stationery>}
 */
const createStationery = async (reqBody) => {
  return Stationery.create(reqBody);
};

/**
 * Get stationery list
 * @param {object} filter
 * @param {object} optionss
 * @returns {Promise<Stationery>}
 */
const getStationeryList = async (filter, options) => {

  return Stationery.find({$or:[{is_active:true}]})
};

/**
 * Get stationery by email
 * @param {string} email
 * @returns {Promise<Stationery>}
 */
const getStationeryByEmail = async (email) => {
  return Stationery.findOne({ email });
};

/**
 * Get stationery details by id
 * @param {ObjectId} stationeryId
 * @returns {Promise<Stationery>}
 */
const getStationeryById = async (stationeryId) => {
  return Stationery.findById(stationeryId);
};

/**
 * Delete stationery
 * @param {ObjectId} stationeryId
 * @returns {Promise<Stationery>}
 */
const deleteStationery = async (stationeryId) => {
  return Stationery.findByIdAndDelete(stationeryId);
};



module.exports = {
  createStationery,
  getStationeryList,
  getStationeryByEmail,
  getStationeryById,
  deleteStationery,
};