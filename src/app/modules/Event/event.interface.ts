import { Types } from 'mongoose';

export type TEvent = {
  name: string;
  date: Date;
  location: string;
  maxAttendees: number;
  createdBy: Types.ObjectId;
  attendees: Types.ObjectId[];
};
