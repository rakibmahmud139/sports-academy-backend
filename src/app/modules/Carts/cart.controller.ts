import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { cartServices } from './cart.service';

const createIntoDB = catchAsync(async (req, res) => {
  const result = await cartServices.createIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart added successfully😍!',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const userId = req.user?._id;

  const result = await cartServices.getAllFromDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All cart retrieved successfully😍!',
    data: result,
  });
});

const getSingleFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await cartServices.getSingleFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single cart retrieved successfully😍!',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await cartServices.deleteFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Class deleted successfully😍!',
    data: result,
  });
});

export const cartControllers = {
  createIntoDB,
  getAllFromDB,
  getSingleFromDB,
  deleteFromDB,
};
