import express from 'express';
import auth from '../../middlewares/auth';
import { sportsClassControllers } from './sportsClass.controller';

const router = express.Router();

router.get('/create', sportsClassControllers.createIntoDB);

export const sportsClassRoutes = router;
