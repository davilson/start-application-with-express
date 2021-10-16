import { User } from "@Entities/User";
import { IUsersRepository } from "@Repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(userDto: ICreateUserRequestDTO): Promise<User> {
    const user = await this.userRepository.save(new User(userDto));
    return user;
  }
}
