import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class FetchUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.fetch();
    return users;
  }
}
