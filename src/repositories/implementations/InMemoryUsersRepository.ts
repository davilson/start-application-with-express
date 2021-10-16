import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [
    new User({ firstname: 'Davilson', surname: 'Castro', email: 'davilsondecastro@gmail.com', password: '123456' }),
    new User({ firstname: 'John', surname: 'Doe', email: 'johndoe@gmail.com', password: '123456' }),
    new User({ firstname: 'Fulano', surname: 'de Tal', email: 'fulanodetal@gmail.com', password: '123456' }),
  ];

  async getById(userId: string): Promise<User> {
    return this.users.find(fUser => fUser.id === userId);
  }

  async fetch(): Promise<User[]> {
    return this.users;
  }

  async save(user: User): Promise<User> {
    const userAlreadyExists = await this.getById(user.id);
    if (userAlreadyExists) {
      this.users = this.users.map(fUser => (fUser.id === user.id) ? user : fUser);
    } else {
      this.users.push(user);
    }
    return user;
  }

  async delete(userId: string): Promise<void> {
    this.users = this.users.filter(fUser => fUser.id !== userId);
  }
}
