import { UserController } from '@/controllers/user.controller';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', (req, res, next) => {
      res.send({ message: 'oke' }).status(200);
    });
    this.router.post('/login:id', this.userController.getUserDetailController);
    // this.router.post('/forgot-password' , verifyToken );
  }

  getRouter(): Router {
    return this.router;
  }
}
