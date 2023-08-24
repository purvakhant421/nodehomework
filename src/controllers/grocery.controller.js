const { groceryService } = require("../services");

/** create grocery */
const createGrocery = async (req, res) => {
  try {
    const reqBody = req.body;

    // const categoryExists = await categoryService.getCategoryByEmail(reqBody.email);
    // if (categoryExists) {
    //   throw new Error("grocery already created by this email!");
    // }

    const grocery = await groceryService.createGrocery(reqBody);
    // if (!category) {
    //   throw new Error("Something went wrong, please try again or later!");
    // }

    res.status(200).json({
      success: true,
      message: "Grocery create successfully!",
      data: { grocery },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get grocery list */
const getGroceryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await groceryService.getGroceryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Grocery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Get grocery details by id */
const getGroceryDetails = async (req, res) => {
  try {
    const getDetails = await groceryService.getGroceryById(req.params.groceryId);
    if (!getDetails) {
      throw new Error("Grocery not found!");
    }

    res.status(200).json({
      success: true,
      message: "Grocery details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete grocery */
const deleteGrocery = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    const groceryExists = await groceryService.getGroceryById(groceryId);
    if (!groceryExists) {
      throw new Error("Grocery not found!");
    }

    await groceryService.deletegrocery(groceryId);

    res.status(200).json({
      success: true,
      message: "Grocery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};



module.exports = {
  createGrocery,
  getGroceryList,
  getGroceryDetails,
  deleteGrocery,
};