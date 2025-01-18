import express from 'express';
import auth from '../../middlewares/auth';
import { instructorControllers } from './instructors.controller';

const router = express.Router();

// router.post('/create', instructorControllers.createIntoDB);
router.get('/', instructorControllers.getAllFromDB);
router.get('/:id', instructorControllers.getSingleFromDB);
router.put('/:id', instructorControllers.updateIntoDB);
router.delete('/:id', instructorControllers.deleteFromDB);

export const instructorRoutes = router;
