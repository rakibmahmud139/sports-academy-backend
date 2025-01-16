import mongoose, { Schema } from 'mongoose';
import { TClass } from './sportsClass.interface';

const ClassSchema = new mongoose.Schema<TClass>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  available_seats: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },

  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'Instructor',
    required: true,
  },
});

export const SportsClass = mongoose.model<TClass>('SportsClass', ClassSchema);
