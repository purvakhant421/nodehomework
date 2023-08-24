const { hotelService } = require("../services");

/** create hotel */
const createHotel = async (req, res) => {
  try {
    const reqBody = req.body;

    const hotel = await hotelService.createHotel(reqBody);

    res.status(200).json({
      success: true,
      message: "Hotel create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get hotel list */
const getHotelList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await hotelService.getHotelList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get hotel list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get hotel details by id */
const getHotelDetails = async (req, res) => {
  try {
    const getDetails = await hotelService.getHotelById(req.params.hotelId);
    if (!getDetails) {
      throw new Error("Hotel not found!");
    }

    res.status(200).json({
      success: true,
      message: "Hotel details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete user */
const deleteHotel = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const hotelExists = await hotelService.getHotelById(hotelId);
    if (!hotelExists) {
      throw new Error("Hotel not found!");
    }

    await hotelService.deleteHotel(hotelId);

    res.status(200).json({
      success: true,
      message: "Hotel delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createHotel,
  getHotelList,
  getHotelDetails,
  deleteHotel,
};