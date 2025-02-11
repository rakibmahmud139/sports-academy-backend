import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { sportsClassServices } from './sportsClass.service';

const createIntoDB = catchAsync(async (req, res) => {
  const result = await sportsClassServices.createIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Class created successfully😍!',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req, res) => {
  const result = await sportsClassServices.getAllFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All class retrieved successfully😍!',
    data: result,
  });
});
const getSingleFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await sportsClassServices.getSingleFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single class retrieved successfully😍!',
    data: result,
  });
});
const updateIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await sportsClassServices.updateIntoDB(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Class updated successfully😍!',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await sportsClassServices.deleteFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Class deleted successfully😍!',
    data: result,
  });
});

export const sportsClassControllers = {
  createIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB,
};
