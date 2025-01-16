import { Types } from 'mongoose';
import { Event } from './event.model';
import { User } from '../User/user.model';

const createEvent = async (data: {
  name: string;
  date: Date;
  location: string;
  maxAttendees: number;
  createdBy: string;
}) => {
  const result = await Event.create(data);
  return result;
};

const getAllEvents = async () => {
  const result = await Event.find();
  return result;
};

const updateEvent = async (
  eventId: string,
  updateData: Partial<{
    name: string;
    date: Date;
    location: string;
    maxAttendees: number;
  }>,
) => {
  const isEventExist = await Event.findById(eventId);

  if (!isEventExist) {
    throw new Error('Event not found');
  }

  const user = await User.findById(isEventExist.createdBy);

  if (!user) {
    throw new Error('User not found');
  }

  const result = await Event.findOneAndUpdate(
    { _id: eventId, createdBy: user._id },
    updateData,
    { new: true },
  );

  return result;
};

const deleteEvent = async (eventId: string) => {
  const isEventExist = await Event.findById(eventId);

  if (!isEventExist) {
    throw new Error('Event not found');
  }

  const user = await User.findById(isEventExist.createdBy);

  if (!user) {
    throw new Error('User not found');
  }

  const result = await Event.findOneAndDelete({
    _id: eventId,
    createdBy: user._id,
  });
  return result;
};

const getEventById = async (eventId: string) => {
  const result = await Event.findById(eventId);
  return result;
};

const registerForEvent = async (eventId: string, userId: Types.ObjectId) => {
  const event = await Event.findById(eventId);

  if (!event) {
    throw new Error('Event not found');
  }

  if (event.attendees.length >= event.maxAttendees) {
    throw new Error('Event is at maximum capacity');
  }

  if (event.attendees.includes(userId)) {
    throw new Error('Already registered for this event');
  }

  event.attendees.push(userId);

  const result = await event.save();
  return result;
};

export const eventServices = {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
  getEventById,
  registerForEvent,
};
