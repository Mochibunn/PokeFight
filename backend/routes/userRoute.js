import express from 'express';
import createUser from '../controllers/userCon.js';

const userRoute = express.Router();

userRoute.route('/login').post(createUser);


export default userRoute;