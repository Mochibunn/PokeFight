import { Schema, model } from 'mongoose';



const pokemonSchema = new Schema({
  id: {
    type: Number,
    required: true,
    min: 0,
    default: 25
  },
  name: {
    english:{type: String,
        required: true,
        unique: true,
        maxlength: 20,
        match: [
          /^[a-zA-Z-\s]+$/,
          'must contain only letters and up to 20 characters',
        ],},
    japanese: {type: String,
        required: true,
        unique: true,
        maxlength: 20},
    chinese: {type: String,
        required: true,
        unique: true,
        maxlength: 20,},
    french: {type: String,
        required: true,
        unique: true,
        maxlength: 20,
        match: [
          /^[a-zA-Z-\s]+$/,
          'must contain only letters and up to 20 characters',
        ],},
        sprite: {
          type: String
        },
  },
  type:
  {type: [String],
    required: true,
    unique: true,
    maxlength: 20,
    match: [
      /^[a-zA-Z-\s]+$/,
      'must contain only letters and up to 20 characters',
    ],},
  base: {
    HP: {
        type: Number,
        required: true,
        min: 0
      },
    Attack: {
        type: Number,
        required: true,
        min: 0
      },
    Defense:{
        type: Number,
        required: true,
        min: 0
      },
    'Sp. Attack': {
        type: Number,
        required: true,
        min: 0
      },
    'Sp. Defense': {
        type: Number,
        required: true,
        min: 0
      },
    Speed:{
        type: Number,
        required: true,
        min: 0
      },
  },    
  sprite: {
    type: String,
}
}
);
const collection = model('Pokemon', pokemonSchema);




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
      collection: [pokemonSchema], 
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