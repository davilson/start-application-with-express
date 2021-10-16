import { Router } from 'express';
import { createUserController } from '../useCases/CreateUser';
import { fetchUserController } from '../useCases/FetchUser';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return fetchUserController.handle(request, response);
});

usersRouter.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

export { usersRouter };
