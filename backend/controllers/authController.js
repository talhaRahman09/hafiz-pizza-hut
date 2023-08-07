import { encryptPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js';

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    // encrypt password
    const encryptedPassword = await encryptPassword(password);
    // save user
    const user = await new userModel({
      name,
      email,
      password: encryptedPassword,
      phone,
    }).save();
    res.status(201).send({
      data: 'successful registration',
      success: true,
      user,
    });
  } catch (error) {
    // Check for MongoDB duplicate key error (code 11000)
    if (error.code === 11000) {
      return res.status(409).send({
        message: 'Email already exists',
        success: false,
        error,
      });
    }

    console.log(error);
    res.status(500).send({
      message: 'registration error',
      success: false,
      error,
    });
  }
};
