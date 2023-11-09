import userModel from '../models/userModel.js';
import ErrorStatus from '../utils/errorStatus.js';

const createUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    if (!userName ||  !password)
      throw new ErrorStatus('Please provide all required field', 400);
    const newUser = await userModel.create({
      userName,
      password,
      collection: [
        {
          id: 1,
          name: {
            english: 'Pikachu',
            japanese: 'ピカチュウ',
            chinese: '皮卡丘',
            french: 'Pikachu',
          },
          type: 'Electric',
          base: {
            HP: 35,
            Attack: 55,
            Defense: 40,
            'Sp. Attack': 50,
            'Sp. Defense': 50,
            Speed: 90,
          },
        },
      ],
    });

    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userModel.find() 
    return res.json(allUsers);
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) throw new ErrorStatus('Invalid Id', 400);

    const findUser = await userModel.findById(id) 

    return res.json(findUser);
  } catch (error) {
    next(error);
  }
};

/* {
const updateLowscore = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new ErrorStatus('Invalid parameters', 400);
    }

    const user = await userModel.findByIdAndUpdate(
      id,
      { $inc: { NumOfWonGames: -1 } },
      { new: true }
    );

    if (!user) {
      throw new ErrorStatus('User not found', 404);
    }

    if (user.NumOfWonGames < 0) {
      user.NumOfWonGames = 0; 
    }

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
*/

const updateHighscore = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new ErrorStatus('Invalid parameters', 400);
    }

    const user = await userModel.findByIdAndUpdate(
      id,
      { $inc: { NumOfWonGames: 1 } },
      { new: true }
    );

    if (!user) {
      throw new ErrorStatus('User not found', 404);
    }

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};



export { createUser,
          getAllUsers,
          getOneUser,
          updateHighscore,
          
};