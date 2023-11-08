import { Schema, model } from 'mongoose';

const playerSchema = new Schema(
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
    password: {
      type: String,
      required: true,
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/,
        'must contain at least one uppercase letter, one lowercase letter, one number and be between 8 and 20 characters long',
      ],
    },
    NumOfWonGames: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    },
    NumOfLostGames: {
        type: Number,
        required: true,
        min: 0,
        default: 0
      },
    /*  collection: {
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
      },*/
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model('User', playerSchema);


export default userModel;