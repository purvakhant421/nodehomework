const { jewelleryService } = require("../services");

/** create jewellery */
const createJewellery = async (req, res) => {
  try {
    const reqBody = req.body;


    const jewellery = await jewelleryService.createJewellery(reqBody);

    res.status(200).json({
      success: true,
      message: "Jewellery create successfully!",
      data: { jewellery },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get Jewellery list */
const getJewelleryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await jewelleryService.getJewelleryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get jewellery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get jewellery details by id */
const getJewelleryDetails = async (req, res) => {
  try {
    const getDetails = await jewelleryService.getJewelleryById(req.params.userId);
    if (!getDetails) {
      throw new Error("Jewellery not found!");
    }

    res.status(200).json({
      success: true,
      message: "Jewellery details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete jewellery */
const deleteJewellery = async (req, res) => {
  try {
    const jewelleryId = req.params.jewelleryId;
    const jewelleryExists = await jewelleryService.getJewelleryById(jewelleryId);
    if (!jewelleryExists) {
      throw new Error("Jewellery not found!");
    }

    await jewelleryService.deleteJewellery(jewelleryId);

    res.status(200).json({
      success: true,
      message: "Jewellery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createJewellery,
  getJewelleryList,
  getJewelleryDetails,
  deleteJewellery,
};