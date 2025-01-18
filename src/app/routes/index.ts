import { Router } from 'express';
import { EventRoutes } from '../modules/Event/event.route';
import { AuthRouter } from '../modules/Auth/auth.route';
import { sportsClassRoutes } from '../modules/SportsClasses/sportsClass.routes';
import { instructorRoutes } from '../modules/Instructors/instructors.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/events',
    route: EventRoutes,
  },
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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
