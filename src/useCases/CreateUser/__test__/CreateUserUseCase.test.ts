import { User } from '@Entities/User';
import { InMemoryUsersRepository } from '@Repositories/implementations/InMemoryUsersRepository';

import { CreateUserUseCase } from '../CreateUserUseCase';

describe('UseCase CreateUser', () => {
  it('should return user after create', async () => {
    const userDto = {
      firstname: 'Davilson',
      surname: 'Castro',
      email: 'davilsondecastro@gmail.com',
      password: '123456',
    };
    const user = new User(userDto);

    const inMemoryUsersRepository = new InMemoryUsersRepository();
    jest.spyOn(inMemoryUsersRepository, 'save').mockResolvedValue(user);

    const createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);

    const response = await createUserUseCase.execute(userDto);
    expect(response).toEqual(user);
  });
});
