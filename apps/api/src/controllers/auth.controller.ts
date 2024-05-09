import { keepLoginService } from '@/services/auth/keep-login.service';
import { loginService } from '@/services/auth/login.service';
import { organizerRegisterService } from '@/services/auth/organizer-register.service';
import { registerService } from '@/services/auth/register.service';
import { NextFunction, Request, Response } from 'express';

export class AuthController {
  async loginController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async registerController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async keepLoginController(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.body.user.id);
      const result = await keepLoginService(userId);
      res.status(200).send(result);
    } catch (err) {
      next(err);
    }
  }
  async registerOrganizerController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await organizerRegisterService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
