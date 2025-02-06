import express from 'express';
import auth from '../../middlewares/auth';
import { cartControllers } from './cart.controller';

const router = express.Router();

router.post('/create', cartControllers.createIntoDB);
router.get('/', auth(), cartControllers.getAllFromDB);
router.get('/:id', cartControllers.getSingleFromDB);
router.delete('/:id', cartControllers.deleteFromDB);

export const cartRoutes = router;
