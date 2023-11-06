import ErrorStatus from "../utils/errorStatus.js";
import leaderBoardModel from "../models/leaderBoardModel.js";

const getLeaderBoard = async (req, res, next) => {
    try {
   const { userName, NumOfWonGames, NumOfLostGames } = req.body;
   if (!userName || !NumOfWonGames || !NumOfLostGames)
   throw new ErrorStatus('Leader Board not found', 400);
   const leaderBoard = await leaderBoardModel.find();
   return res.json(leaderBoard);
    } catch (error) {
      next(error);
    }
  };

  const createLeaderBoard = async (req, res, next) => {
    try {
        const { userName, NumOfWonGames, NumOfLostGames } = req.body;
        if (!userName || !NumOfWonGames || !NumOfLostGames)
        throw new ErrorStatus('wrong Leader Board values', 400);
        const newLeaderBoard = await leaderBoardModel.create({
            userName,
            NumOfWonGames,
            NumOfLostGames
          });
          return res.json(newLeaderBoard);
    } catch (error) {
        next(error);
    }
  }

  export {getLeaderBoard,
createLeaderBoard};
