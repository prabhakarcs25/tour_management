// import Booking from "../models/Booking.js";
import Booking from '../models/Booking.js'
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    console.log("hello")
    const savedBooking = await newBooking.save()
    console.log(savedBooking)
    console.log("hello")
    console.log("hello")

    res.status(200).json({
      success: true,
      message: "Your Tour is Booked",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
      message: "Your Tour is Not  Booked Due to internal error",
    });
  }
};

// get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: "Successful",
      data: book,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
      message: "Not found...",
    });
  }
};

// get all booking
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({
      success: true,
      message: "Successful",
      data: books,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
      message: "Internal Server Error",
    });
  }
};
