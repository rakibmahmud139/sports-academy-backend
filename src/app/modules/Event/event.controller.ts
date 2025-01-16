import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { eventServices } from './event.service';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import app from '../../../app';

const httpServer = createServer(app);
const io = new SocketIOServer(httpServer);

const createEvent = catchAsync(async (req, res) => {
  const result = await eventServices.createEvent(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event created successfully!',
    data: result,
  });
});

const getAllEvents = catchAsync(async (req, res) => {
  const result = await eventServices.getAllEvents();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All events retrieved successfully!',
    data: result,
  });
});

const getEventById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await eventServices.getEventById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single event retrieved successfully!',
    data: result,
  });
});

const updateEvent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await eventServices.updateEvent(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event update successfully!',
    data: result,
  });
});

const deleteEvent = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await eventServices.deleteEvent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event deleted successfully!',
    data: result,
  });
});

const registerForEvent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const result = await eventServices.registerForEvent(id, userId);

  // Emit 'newAttendee' event
  io.emit('newAttendee', { eventId: result._id, attendeeId: userId });

  // Check if the event is full and emit 'eventFull' event
  if (result.attendees.length === result.maxAttendees) {
    io.emit('eventFull', result._id);
  }

  // Send a success response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event registered successfully!',
    data: result,
  });
});

export const eventControllers = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  registerForEvent,
};
