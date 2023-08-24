const { Pharmacy } = require("../models");

/**
 * Create stationery
 * @param {object} reqBody
 * @returns {Promise<Pharmacy>}
 */
const createPharmacy = async (reqBody) => {
  return Pharmacy.create(reqBody);
};

/**
 * Get pharmacy list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Pharmacy.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get pharmacy by email
 * @param {string} email
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyByEmail = async (email) => {
  return Pharmacy.findOne({ email });
};

/**
 * Get pharmacy details by id
 * @param {ObjectId} stationeryId
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyById = async (pharmacyId) => {
  return Pharmacy.findById(pharmacyId);
};

/**
 * Delete pharmacy
 * @param {ObjectId} pharmacyId
 * @returns {Promise<Pharmacy>}
 */
const deletePharmacy = async (pharmacyId) => {
  return Pharmacy.findByIdAndDelete(pharmacyId);
};



module.exports = {
  createPharmacy,
  getPharmacyList,
  getPharmacyByEmail,
  getPharmacyById,
  deletePharmacy,
};