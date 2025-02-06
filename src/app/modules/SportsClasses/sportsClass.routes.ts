import express from 'express';
import auth from '../../middlewares/auth';
import { sportsClassControllers } from './sportsClass.controller';

const router = express.Router();

router.post('/create', auth(), sportsClassControllers.createIntoDB);
router.get('/', sportsClassControllers.getAllFromDB);
router.get('/:id', sportsClassControllers.getSingleFromDB);
router.put('/:id', auth(), sportsClassControllers.updateIntoDB);
router.delete('/:id', auth(), sportsClassControllers.deleteFromDB);

export const sportsClassRoutes = router;
