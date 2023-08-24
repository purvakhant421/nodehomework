const { stationeryService } = require("../services");

/** create stationery */
const createStationery = async (req, res) => {
  try {
    const reqBody = req.body;

    const stationery = await stationeryService.createStationery(reqBody);

    res.status(200).json({
      success: true,
      message: "stationery create successfully!",
      data: { stationery },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get stationery list */
const getStationeryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await stationeryService.getStationeryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get stationery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Get stationery details by id */
const getStationeryDetails = async (req, res) => {
  try {
    const getDetails = await stationeryService.getStationeryById(req.params.stationeryId);
    if (!getDetails) {
      throw new Error("Stationery not found!");
    }

    res.status(200).json({
      success: true,
      message: "Stationery details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete stationery */
const deleteStationery = async (req, res) => {
  try {
    const stationeryId = req.params.stationeryId;
    const stationeryExists = await stationeryService.getStationeryById(stationeryId);
    if (!stationeryExists) {
      throw new Error("Stationery not found!");
    }

    await stationeryService.deleteStationery(stationeryId);

    res.status(200).json({
      success: true,
      message: "Stationery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};



module.exports = {
  createStationery,
  getStationeryList,
  getStationeryDetails,
  deleteStationery,
};