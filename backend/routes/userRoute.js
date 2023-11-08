import express from 'express';
import  { createUser, getAllUsers, getOneUser, updateHighscore, updateLowscore } from '../controllers/userCon.js';

const userRoute = express.Router();

userRoute.route('/login').post(createUser);
userRoute.route('/all').get(getAllUsers);
userRoute.route('/:id').get(getOneUser);
userRoute.route('/:id/won').put(updateHighscore);
userRoute.route('/:id/lost').put(updateLowscore);


export default userRoute; 