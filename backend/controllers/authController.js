import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// register
export const register = async (req, res) => {
  try {
    // hasing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });
    await newUser.save();
    res.status(200).json({ success: true, message: "successfully created" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error, message: "failed created try again" });
  }
};

// login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    // if user Does not exist
    if (!user) {
      return res.status(404).json({
        message: "User Does Not Exist",
        success: false,
      });
    }
    // if user exist then chech the password or compare th password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // if password is correct
    if (!checkCorrectPassword) {
      return res.status(401).json({
        message: "Incorrect Email or Password",
        success: false,
      });
    }
    const { password, role, ...rest } = user._doc;

    // create jwt token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in the browser cookie and send the response to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        success: true,
        message: "successfully login",
        data: { ...rest },
        role,
      });
  } catch (error) {
    res.status(500).json({
      message: "Internal Connection Error Failed to login",
      success: false,
      error,
    });
  }
};
