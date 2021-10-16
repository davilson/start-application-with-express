import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(userDto: ICreateUserRequestDTO): Promise<User> {
    const user = await this.userRepository.save(new User(userDto));
    return user;
  }
}
