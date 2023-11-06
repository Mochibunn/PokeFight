import express from 'express';
import {getLeaderBoard,
createLeaderBoard} from '../controllers/leaderBoardCon.js';


const leaderRoute = express.Router();

leaderRoute.route('/wins').get(getLeaderBoard);
leaderRoute.route('/newLeader').post(createLeaderBoard);


export default leaderRoute;