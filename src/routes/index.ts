import { Express } from 'express';
import { usersRouter } from './users';

const createRoutes = (app: Express) => {
  app.use('/users', usersRouter);
};

export { createRoutes };
