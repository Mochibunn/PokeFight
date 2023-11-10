import express from 'express';
import  { createUser, getAllUsers, getOneUser, updateHighscore } from '../controllers/userCon.js';
import {getCollection, editCollection} from '../controllers/Collection.js';
import {getLeaderBoard} from '../controllers/leaderBoardCon.js';


const userRoute = express.Router();

userRoute.route('/login').post(createUser);
userRoute.route('/all').get(getAllUsers);
userRoute.route('/high').get(getLeaderBoard);
userRoute.route('/:id').get(getOneUser);
userRoute.route('/:id/won').put(updateHighscore);
userRoute.route('/:id/collection').get(getCollection).put(editCollection);



export default userRoute; 