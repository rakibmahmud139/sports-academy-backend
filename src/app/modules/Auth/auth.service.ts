import jwt from 'jsonwebtoken';
import config from '../../config';
import { User } from '../User/user.model';
import { TUser } from '../User/user.interface';
import bcrypt from 'bcrypt';

export const registerUser = async (payload: TUser) => {
  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds),
  );

  const resData = {
    email: payload.email,
    password: hashedPassword,
  };

  const result = await User.create(resData);
  return result;
};

export const loginUser = async (payload: TUser) => {
  // checking if the user is exist
  const user = await User.findOne({ email: payload?.email });

  if (!user) {
    throw new Error('This user is not found !');
  }

  if (!payload.password || !user.password) {
    throw new Error('Password or hash is missing');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new Error('Your password is not matched 😒!');
  }

  const jwtPayload = {
    _id: user._id,
    email: user.email,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '7d',
  });

  return {
    accessToken,
  };
};

export const authServices = {
  registerUser,
  loginUser,
};
