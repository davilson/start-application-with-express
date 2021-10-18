import { User } from '@Entities/User';
import { IUsersRepository } from '@Repositories/IUsersRepository';

import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(userDto: ICreateUserRequestDTO): Promise<User> {
    const userAlreadyExists = await this.userRepository.getByEmail(
      userDto.email,
    );

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = await this.userRepository.save(new User(userDto));
    return user;
  }
}
