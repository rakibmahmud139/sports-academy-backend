import { TClass } from './sportsClass.interface';
import { SportsClass } from './sportsClass.model';

const createIntoDB = async (payload: TClass) => {
  const result = await SportsClass.create(payload);
  return result;
};

const getAllFromDB = async () => {
  const result = await SportsClass.find();
  return result;
};
const getSingleFromDB = async (id: string) => {
  const result = await SportsClass.findById(id);
  return result;
};
const updateIntoDB = async (id: string, payload: Partial<TClass>) => {
  const result = await SportsClass.findByIdAndUpdate(id, payload);
  return result;
};
const deleteFromDB = async (id: string) => {
  const result = await SportsClass.findByIdAndRemove(id);
  return result;
};

export const sportsClassServices = {
  createIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB,
};
