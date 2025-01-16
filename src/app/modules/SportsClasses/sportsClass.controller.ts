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

export const sportsClassControllers = {
  createIntoDB,
};
