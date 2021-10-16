import { InMemoryUsersRepository } from "../../repositories/implementations/InMemoryUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const inMemoryUsersRepository = new InMemoryUsersRepository();

const createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
