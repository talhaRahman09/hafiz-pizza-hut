import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

//token based Protected Routes

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JSON_WEBTOKEN
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//isAdmin
export const isAdmin = async (req, res, next) => {
  try {
    // Find the user
    const user = await userModel.findById(req.user._id);

    if (!user) {
      return res.status(401).send({
        success: false,
        message: 'User not found',
      });
    }

    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: 'You are not authorized to access this route',
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
    });
  }
};
