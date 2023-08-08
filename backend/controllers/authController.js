import { comparePassword, encryptPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js';
import JWT from 'jsonwebtoken'; // Import the jsonwebtoken library

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const encryptedPassword = await encryptPassword(password);
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

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'User not found',
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(401).send({
        success: false,
        message: 'Invalid password',
      });
    }

    const token = JWT.sign({ _id: user._id }, process.env.JSON_WEBTOKEN, {
      expiresIn: '7d',
    });

    res.status(200).send({
      success: true,
      message: 'Login successfully 😍',
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Login failed',
      success: false,
      error,
    });
  }
};

//test controller
export const testController = async (req, res) => {
  res.status(400).send({
    message: 'protected Route',
  });
};
