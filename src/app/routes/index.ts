import { Router } from 'express';
import { AuthRouter } from '../modules/Auth/auth.route';
import { sportsClassRoutes } from '../modules/SportsClasses/sportsClass.routes';
import { instructorRoutes } from '../modules/Instructors/instructors.routes';
import { cartRoutes } from '../modules/Carts/cart.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/classes',
    route: sportsClassRoutes,
  },
  {
    path: '/instructor',
    route: instructorRoutes,
  },
  {
    path: '/cart',
    route: cartRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
