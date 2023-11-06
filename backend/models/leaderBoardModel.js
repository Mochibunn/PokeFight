import { Schema, model } from 'mongoose';

const leaderBoardSchema = new Schema(

    {
        userName: {
          type: String,
          required: true,
          unique: true,
          maxlength: 20,
          match: [
            /^[a-zA-Z-\s]+$/,
            'must contain only letters and up to 20 characters',
          ],
        },
        NumOfWonGames: {
          type: Number,
          required: true,
          match: [
            /^(0-9)/,
            'must contain a number between 0 and 9',
          ],
        },
        NumOfLostGames: {
            type: Number,
            required: true,
            match: [
              /^(0-9)/,
              'must contain a number between 0 and 9',
            ],
          },
      },
      {
        timestamps: true,
      }

)

const leaderBoardModel = model('leaderBoard', leaderBoardSchema);

export default leaderBoardModel;