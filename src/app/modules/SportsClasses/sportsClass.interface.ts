import { Types } from 'mongoose';

export interface TClass {
  name: string;
  image: string;
  instructor: Types.ObjectId;
  available_seats: number;
  price: number;
  description: string;
  category: Types.ObjectId;
}
