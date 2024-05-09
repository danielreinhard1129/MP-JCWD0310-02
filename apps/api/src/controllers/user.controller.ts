import { loginService } from '@/services/auth/login.service';
import { getUserDetailService } from '@/services/user/get-user-detail-service';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async getUserDetailController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getUserDetailService(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
