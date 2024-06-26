import Tour from "../models/Tour.js";

// create new tour

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "successful created",
      data: savedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create . Try Again" });
  }
};

// update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successful updated",
      data: updateTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update . Try Again" });
  }
};

// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
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
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Tour.findById(id).populate('reviews');
    res.status(200).json({
      success: true,
      message: "successful fetch single Data",
      data: data,
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
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({}).populate('reviews')
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "successful fetch All Data",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
      message: "Failed to fetch Data . Try Again",
    });
  }
};

export const getTourBySearch = async (req, res) => {
  // here 'i ' means case senstive
  const city = new RegExp(req.query.city, 'i');
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    // gte means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });

    res.status(200).json({
      success: true,
      message: "successful ",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
      message: "Failed to fetch Data . Try Again",
    });
  }
};

// get featured Tour tour
export const getFeaturedTour = async (req, res) => {

  try {
    const tours = await Tour.find({featured:true}).populate('reviews').limit(8);
    res.status(200).json({
      success: true,
      message: "successful ",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
      message: "Failed to fetch Data . Try Again",
    });
  }
};


// get count of search
export const getTourCount =async(req,res)=>{
    try {
        const tourCount=await Tour.estimatedDocumentCount();
        res.status(200).json({
            success: true,
            message: "successful ",
            data: tourCount,
          });
    } catch (error) {
        res.status(404).json({
            success: false,
            error,
            message: "Failed to fetch Data . Try Again",
          });
    }
}