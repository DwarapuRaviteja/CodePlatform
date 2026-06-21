import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import User from "../models/User.js";

const generateToken = (id) => {

  return jwt.sign(

    { id },

    process.env.JWT_SECRET,

    {
      expiresIn: "7d",
    }

  );

};

export const registerUser =
async (req, res) => {

  try {

    const {
      name,
      email,
      password,
    } = req.body;

    if (
      !name ||
      !email ||
      !password
    ) {

      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });

    }

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "User already exists",
      });

    }

    const salt =
      await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(
        password,
        salt
      );

    const user =
      await User.create({

        name,

        email,

        password: hashedPassword,

      });

    return res.status(201).json({

      success: true,

      token: generateToken(user._id),

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Registration failed",
    });

  }

};

export const loginUser =
async (req, res) => {

  try {

    const {
      email,
      password,
    } = req.body;

    if (
      !email ||
      !password
    ) {

      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });

    }

    const user =
      await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });

    }

    return res.status(200).json({

      success: true,

      token: generateToken(user._id),

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Login failed",
    });

  }

};