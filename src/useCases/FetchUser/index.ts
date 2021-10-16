import { InMemoryUsersRepository } from "../../repositories/implementations/InMemoryUsersRepository";
import { FetchUserController } from "./FetchUserController";
import { FetchUserUseCase } from "./FetchUserUseCase";

const inMemoryUsersRepository = new InMemoryUsersRepository();

const fetchUserUseCase = new FetchUserUseCase(inMemoryUsersRepository);

const fetchUserController = new FetchUserController(fetchUserUseCase);

export { fetchUserController, fetchUserUseCase };
