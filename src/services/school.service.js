const { School } = require("../models");

/**
 * Create school
 * @param {object} reqBody
 * @returns {Promise<School>}
 */
const createSchool = async (reqBody) => {
  return School.create(reqBody);
};

/**
 * Get school list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<School>}
 */
const getSchoolList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return School.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get school by email
 * @param {string} email
 * @returns {Promise<School>}
 */
const getSchoolByEmail = async (email) => {
  return School.findOne({ email });
};

/**
 * Get school details by id
 * @param {ObjectId} schoolId
 * @returns {Promise<School>}
 */
const getSchoolById = async (schoolId) => {
  return School.findById(schoolId);
};

/**
 * Delete school
 * @param {ObjectId} schoolId
 * @returns {Promise<School>}
 */
const deleteSchool = async (schoolId) => {
  return School.findByIdAndDelete(schoolId);
};



module.exports = {
  createSchool,
  getSchoolList,
  getSchoolByEmail,
  getSchoolById,
  deleteSchool,
};