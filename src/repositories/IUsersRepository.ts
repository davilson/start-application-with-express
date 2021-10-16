import { User } from "../entities/User";

export interface IUsersRepository {
  getById(userId: string): Promise<User>;
  fetch(): Promise<User[]>;
  save(user: User): Promise<User>;
  delete(userId: string): Promise<void>;
}
