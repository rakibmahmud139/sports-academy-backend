import { TInstructor } from './instructors.interface';
import { Instructor } from './instructors.model';

// const createIntoDB = async (payload: TClass) => {
//   const result = await SportsClass.create(payload);
//   return result;
// };

const getAllFromDB = async () => {
  const result = await Instructor.find();
  return result;
};
const getSingleFromDB = async (id: string) => {
  const result = await Instructor.findById(id);
  return result;
};
const updateIntoDB = async (id: string, payload: Partial<TInstructor>) => {
  const result = await Instructor.findByIdAndUpdate(id, payload);
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await Instructor.findByIdAndRemove(id);
  return result;
};

export const instructorServices = {
  //   createIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB,
};
