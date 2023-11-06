import express from 'express';
import  { createUser, getAllUsers, getOneUser } from '../controllers/userCon.js';

const userRoute = express.Router();

userRoute.route('/login').post(createUser);
userRoute.route('/all').get(getAllUsers);
userRoute.route('/:id').get(getOneUser);



export default userRoute; 