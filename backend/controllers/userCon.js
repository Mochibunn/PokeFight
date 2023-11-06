import userModel from '../models/userModel.js';
import ErrorStatus from '../utils/errorStatus.js';

const createUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    if (!userName ||  !password)
      throw new ErrorStatus('Please provide all required field', 400);
    const newUser = await userModel.create({
      userName,
      password
    });

    return res.json(newUser);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userModel.find() //.populate('leaderBoard');
    return res.json(allUsers);
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) throw new ErrorStatus('Invalid Id', 400);

    const findUser = await userModel.findById(id) //.populate('leaderBoard');

    return res.json(findUser);
  } catch (error) {
    next(error);
  }
};


export { createUser,
          getAllUsers,
          getOneUser
};