import mongoose, { Schema } from 'mongoose';
import { TInstructor, TRole } from './instructors.interface';

const InstructorSchema = new mongoose.Schema<TInstructor>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  number_of_class_taken: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(TRole),
  },
  achievements: {
    type: [String],
    required: true,
  },
  experience_years: {
    type: Number,
  },
  qualification: {
    type: String,
  },
  rating: { type: Number },
  specialization: {
    type: String,
  },
});

export const Instructor = mongoose.model<TInstructor>(
  'Instructor',
  InstructorSchema,
);
