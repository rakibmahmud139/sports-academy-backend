import { SportsClass } from '../SportsClasses/sportsClass.model';
import { User } from '../User/user.model';
import { TCart } from './cart.interface';
import { Cart } from './cart.model';

const createIntoDB = async (payload: TCart) => {
  const isUser = await User.findById(payload.user._id);

  if (!isUser) {
    throw new Error('User not found');
  }

  const isClassExist = await SportsClass.findById(payload.classId);

  if (!isClassExist) {
    throw new Error('Class not found');
  }

  const result = await Cart.create(payload);
  return result;
};

const getAllFromDB = async (userId: string) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  const result = await Cart.find({ user: user._id });

  return result;
};
const getSingleFromDB = async (id: string) => {
  const result = await Cart.findById(id);
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await SportsClass.findByIdAndRemove(id);
  return result;
};

export const cartServices = {
  createIntoDB,
  getAllFromDB,
  getSingleFromDB,
  deleteFromDB,
};
