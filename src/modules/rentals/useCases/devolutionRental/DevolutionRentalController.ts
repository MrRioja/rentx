import { Request, Response } from "express";
import { container } from "tsyringe";

import { DevolutionRentalUserCase } from "./DevolutionRentalUseCase";

class DevolutionRentalController {
  async handle(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { id } = request.params;

    const devolutionRentalUserCase = container.resolve(
      DevolutionRentalUserCase
    );

    const rental = await devolutionRentalUserCase.execute({ id, user_id });

    return response.status(200).json(rental);
  }
}

export { DevolutionRentalController };
