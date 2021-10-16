import { Request, Response } from 'express';
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateUserRequestDTO;

    try {
      const user = await this.createUserUseCase.execute(data);
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ message: 'Unexpected error.'})
    }
  }
}
