import ErrorStatus from "../utils/errorStatus.js";
import userModel from "../models/userModel.js";

const getLeaderBoard = async (req, res, next) => {
    try {
      const leaderBoardUsers = await userModel.find({
        NumOfWonGames: {$gt: 0}
      }).limit(2).sort({NumOfWonGames: -1});
   return res.json(leaderBoardUsers);
    } catch (error) {
      next(error);
    }
  };


  export {getLeaderBoard };
