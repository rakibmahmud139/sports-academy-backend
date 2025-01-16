import { Router } from 'express';
import { EventRoutes } from '../modules/Event/event.route';
import { AuthRouter } from '../modules/Auth/auth.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
