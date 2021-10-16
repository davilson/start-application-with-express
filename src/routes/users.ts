import { createUserController } from '@UseCases/CreateUser';
import { fetchUserController } from '@UseCases/FetchUser';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return fetchUserController.handle(request, response);
});

usersRouter.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

export { usersRouter };
