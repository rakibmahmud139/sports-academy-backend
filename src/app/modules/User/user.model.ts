import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import { TRole } from '../Instructors/instructors.interface';

const userSchema = new Schema<TUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(TRole),
    default: 'STUDENT',
  },
});

export const User = model<TUser>('User', userSchema);
