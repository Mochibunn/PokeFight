import userModel from '../models/userModel.js';
import ErrorStatus from '../utils/errorStatus.js';

const createUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    if (!userName ||  !password)
      throw new ErrorStatus('Please provide all required field', 400);
    const newUser = await userModel.create({
      firstName,
      password
    });

    return res.json(newUser);
  } catch (error) {
    next(error);
  }
};


export default createUser;