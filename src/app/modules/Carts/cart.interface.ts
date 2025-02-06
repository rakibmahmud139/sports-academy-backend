import { Types } from 'mongoose';

export interface TCart {
  user: Types.ObjectId;
  classId: Types.ObjectId;
  quantity: number;
}
