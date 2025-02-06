import { Schema, model } from 'mongoose';
import { TCart } from './cart.interface';

const cartSchema = new Schema<TCart>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  classId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'SportsClass',
  },
  quantity: {
    type: Number,
  },
});

export const Cart = model<TCart>('Cart', cartSchema);
