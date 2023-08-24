const { musicService } = require("../services");

/** create music */
const createMusic = async (req, res) => {
  try {
    const reqBody = req.body;

    // const categoryExists = await categoryService.getCategoryByEmail(reqBody.email);
    // if (categoryExists) {
    //   throw new Error("User already created by this email!");
    // }

    const music = await musicService.createMusic(reqBody);
    // if (!category) {
    //   throw new Error("Something went wrong, please try again or later!");
    // }

    res.status(200).json({
      success: true,
      message: "Music create successfully!",
      data: { music },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get Music list */
const getMusicList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await musicService.getMusicList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get music list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get music details by id */
const getMusicDetails = async (req, res) => {
  try {
    const getDetails = await musicService.getMusicById(req.params.userId);
    if (!getDetails) {
      throw new Error("Music not found!");
    }

    res.status(200).json({
      success: true,
      message: "Music details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Music*/
const deleteMusic = async (req, res) => {
  try {
    const musicId = req.params.musicId;
    const musicExists = await musicService.getMusicById(musicId);
    if (!musicExists) {
      throw new Error("Music not found!");
    }

    await musicService.deleteMusic(musicId);

    res.status(200).json({
      success: true,
      message: "Music delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createMusic,
  getMusicList,
  getMusicDetails,
  deleteMusic,
};