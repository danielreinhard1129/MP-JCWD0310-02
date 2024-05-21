import { UserController } from '@/controllers/user.controller';
import { uploader } from '@/lib/uploader';
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
    this.router.post('/edit',uploader('IMG', '/images').array('thumbnail', 1), this.userController.postEditUserProfile);
    this.router.get('/voucher/:id', this.userController.getUserVoucherController);
    this.router.get('/reward', this.userController.getUserRewardController);
    this.router.get(
      '/transaction',
      this.userController.getTransactionController,
    );
    this.router.get(
      '/transaction/:uuid',
      this.userController.getTransactionUserDetailController,
    );
    this.router.get('/events', this.userController.getEventHistoryController);
    this.router.post('/event/transaction', this.userController.createUserTransaction);
    this.router.post('/event/transaction/proof',uploader('IMG','/images').array('thumbnail',1), this.userController.postUserTransactionProof);
  }

  getRouter(): Router {
    return this.router;
  }
}
