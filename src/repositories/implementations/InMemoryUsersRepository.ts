import { User } from '@Entities/User';
import { IUsersRepository } from '@Repositories/IUsersRepository';

export class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async getById(userId: string): Promise<User | undefined> {
    return this.users.find((fUser) => fUser.id === userId);
  }

  async getByEmail(userEmail: string): Promise<User | undefined> {
    return this.users.find((fUser) => fUser.email === userEmail);
  }

  async fetch(): Promise<User[]> {
    return this.users;
  }

  async save(user: User): Promise<User> {
    const userAlreadyExists = await this.getById(user.id);
    if (userAlreadyExists) {
      this.users = this.users.map((fUser) =>
        fUser.id === user.id ? user : fUser,
      );
    } else {
      this.users.push(user);
    }
    return user;
  }

  async delete(userId: string): Promise<void> {
    this.users = this.users.filter((fUser) => fUser.id !== userId);
  }
}
