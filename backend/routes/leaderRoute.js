import express from 'express';
import {getLeaderBoard} from '../controllers/leaderBoardCon.js';


const leaderRoute = express.Router();

leaderRoute.route('/').get(getLeaderBoard);



export default leaderRoute;