import User from "../models/User.js";

// create new tour

export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "successful created",
      data: savedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create . Try Again" });
  }
};

// update tour
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successful updated",
      data: updateUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update . Try Again" });
  }
};

// delete tour
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "successful deleted",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error, message: "Failed to delete . Try Again" });
  }
};

// get single tour
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user= await User.findById(id);
    res.status(200).json({
      success: true,
      message: "successful fetch single Data",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
      message: "Failed to fetch Data . Try Again",
    });
  }
};
// get All tour
export const getAllUser = async (req, res) => {


  try {
    const users = await User.find({})
    res.status(200).json({
      success: true,
      message: "successful fetch All Data",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
      message: "Failed to fetch Data. Try Again",
    });
  }
};
