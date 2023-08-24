const { Grocery } = require("../models");

/**
 * Create Grocery
 * @param {object} reqBody
 * @returns {Promise<Grocery>}
 */
const createGrocery = async (reqBody) => {
  return Grocery.create(reqBody);
};

/**
 * Get grocery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Grocery>}
 */
const getGroceryList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Grocery.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get grocery by email
 * @param {string} email
 * @returns {Promise<Grocery>}
 */
const getGroceryByEmail = async (email) => {
  return Grocery.findOne({ email });
};

/**
 * Get grocery details by id
 * @param {ObjectId} groceryId
 * @returns {Promise<Grocery>}
 */
const getGroceryById = async (groceryId) => {
  return Grocery.findById(groceryId);
};

/**
 * Delete grocery
 * @param {ObjectId} groceryId
 * @returns {Promise<Grocery>}
 */
const deleteGrocery = async (groceryId) => {
  return Grocery.findByIdAndDelete(groceryId);
};



module.exports = {
  createGrocery,
  getGroceryList,
  getGroceryByEmail,
  getGroceryById,
  deleteGrocery,
};