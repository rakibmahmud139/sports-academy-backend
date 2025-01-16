import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/User/user.model';
import catchAsync from '../utils/catchAsync';

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // checking if the token is missing
    if (!token) {
      throw new Error('You are not authorized!');
    }

    // checking if the given token is valid
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { email, _id } = decoded;

    // checking if the user is exist
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error('You are not authorized!');
    }

    req.user = decoded as JwtPayload;

    next();
  });
};

export default auth;
