import { Schema, model } from 'mongoose';

const playerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
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