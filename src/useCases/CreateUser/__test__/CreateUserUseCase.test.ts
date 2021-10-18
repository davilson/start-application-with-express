import { User } from '@Entities/User';
import { InMemoryUsersRepository } from '@Repositories/implementations/InMemoryUsersRepository';

import { CreateUserUseCase } from '../CreateUserUseCase';

describe('UseCase CreateUser', () => {
  it('should return user after create', async () => {
    const userDto = {
      firstname: 'Random',
      surname: 'User',
      email: 'randomuser@mail.com',
      password: '123456!',
    };
    const user = new User(userDto);

    const inMemoryUsersRepository = new InMemoryUsersRepository();
    jest.spyOn(inMemoryUsersRepository, 'save').mockResolvedValue(user);

    const createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);

    const response = await createUserUseCase.execute(userDto);
    expect(response).toEqual(user);
  });

  it('should return throw when user already exists', async () => {
    const userDto = {
      firstname: 'New',
      surname: 'User',
      email: 'newuser@gmail.com',
      password: '43210pass!',
    };
    const user = new User(userDto);

    const inMemoryUsersRepository = new InMemoryUsersRepository();
    jest.spyOn(inMemoryUsersRepository, 'getByEmail').mockResolvedValue(user);

    const createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);

    await expect(createUserUseCase.execute(userDto)).rejects.toThrowError(
      'User already exists',
    );
  });
});
