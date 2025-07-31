import { Schema, Document, model } from 'mongoose';
import { User } from '../../types/index.js';

export interface UserDocument extends User, Document {
  createdAt: Date,
  updatedAt: Date,
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [1, 'Min length for firstname is 1'],
    maxlength: [15, 'Max length for firstname is 15'],
  },
  email: {
    type: String,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
    required: true,
  },
  avatar: {
    type: String,
    validate: {
      validator: function(v: string) {
        return /\.(jpg|jpeg|png)$/i.test(v);
      },
      message: 'Avatar must be in jpg or png format'
    },
    default: 'default-avatar.png',
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Min length for password is 6'],
    maxlength: [12, 'Max length for password is 12'],
  },
  isPro: {
    type: Boolean,
    required: true,
    default: false,
  },
}, {
  timestamps: true,
});

export const UserModel = model<UserDocument>('User', userSchema);