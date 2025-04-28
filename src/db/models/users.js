import { Schema, model } from 'mongoose';
import { emailRegexp } from '../../constants/auth.js';
import { handleSaveError } from './hooks.js';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

userSchema.post('save', handleSaveError);
userSchema.post('findOneAndUpdate', handleSaveError);

const userCollection = model('user', userSchema);

export default userCollection;
