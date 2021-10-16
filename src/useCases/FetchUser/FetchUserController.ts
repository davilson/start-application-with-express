import { Request, Response } from 'express';
import { FetchUserUseCase } from "./FetchUserUseCase";

export class FetchUserController {
  constructor(private fetchUserUseCase: FetchUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.fetchUserUseCase.execute();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({ message: 'Unexpected error.'})
    }
  }
}
