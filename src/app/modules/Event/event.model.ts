import mongoose, { Schema } from 'mongoose';
import { TEvent } from './event.interface';

const EventSchema = new mongoose.Schema<TEvent>({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  maxAttendees: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

export const Event = mongoose.model<TEvent>('Event', EventSchema);
