import { TClass } from './sportsClass.interface';
import { SportsClass } from './sportsClass.model';

const createIntoDB = async (payload: TClass) => {
  const result = await SportsClass.create(payload);
  return result;
};

export const sportsClassServices = {
  createIntoDB,
};
