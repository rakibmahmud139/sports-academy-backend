import express from 'express';
import auth from '../../middlewares/auth';
import { eventControllers } from './event.controller';

const router = express.Router();

router.get('/', auth(), eventControllers.getAllEvents);
router.get('/:id', auth(), eventControllers.getEventById);
router.post('/create', auth(), eventControllers.createEvent);
router.put('/:id', auth(), eventControllers.updateEvent);
router.delete('/:id', auth(), eventControllers.deleteEvent);
router.post('/:id/register', auth(), eventControllers.registerForEvent);

export const EventRoutes = router;
