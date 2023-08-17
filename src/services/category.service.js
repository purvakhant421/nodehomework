const { Category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Category>}
 */
const getCategoryList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Category.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<Category>}
 */
const getCategoryByEmail = async (email) => {
  return Category.findOne({ email });
};



module.exports = {
  createCategory,
  getCategoryList,
  getCategoryByEmail,
};