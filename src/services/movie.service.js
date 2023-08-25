const { Movie } = require("../models");

/**
 * Create movie
 * @param {object} reqBody
 * @returns {Promise<Movie>}
 */
const createMovie = async (reqBody) => {
  return Movie.create(reqBody);
};

/**
 * Get movie list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Movie>}
 */
const getMovieList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Movie.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get movie by email
 * @param {string} email
 * @returns {Promise<Movie>}
 */
const getMovieByEmail = async (email) => {
  return Movie.findOne({ email });
};

/**
 * Get movie details by id
 * @param {ObjectId} movieId
 * @returns {Promise<Movie>}
 */
const getMovieById = async (movieId) => {
  return Movie.findById(movieId);
};

/**
 * Delete movie
 * @param {ObjectId} movieId
 * @returns {Promise<Movie>}
 */
const deleteMovie = async (movieId) => {
  return Movie.findByIdAndDelete(movieId);
};



module.exports = {
  createMovie,
  getMovieList,
  getMovieByEmail,
  getMovieById,
  deleteMovie,
};