import userModel from '../models/userModel.js';
import ErrorStatus from '../utils/errorStatus.js';

const createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName ||  !password)
      throw new ErrorStatus('Please provide all required field', 400);
    const newUser = await userModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export default createUser;