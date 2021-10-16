import { User } from '@Entities/User';
import { IUsersRepository } from '@Repositories/IUsersRepository';

export class FetchUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.fetch();
    return users;
  }
}
