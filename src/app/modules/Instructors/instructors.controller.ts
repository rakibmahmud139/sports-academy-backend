import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { instructorServices } from './instructors.service';

// const createIntoDB = catchAsync(async (req, res) => {
//   const result = await instructorServices.createIntoDB(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Instructor created successfully😍!',
//     data: result,
//   });
// });

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await instructorServices.getAllFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Instructor retrieved successfully😍!',
    data: result,
  });
});
const getSingleFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await instructorServices.getSingleFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Instructor retrieved successfully😍!',
    data: result,
  });
});
const updateIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await instructorServices.updateIntoDB(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Instructor updated successfully😍!',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await instructorServices.deleteFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Instructor deleted successfully😍!',
    data: result,
  });
});

export const instructorControllers = {
  //   createIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB,
};
