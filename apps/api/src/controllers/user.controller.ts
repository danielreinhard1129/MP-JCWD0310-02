import { getUserDetailService } from '@/services/user/get-user-detail-service';
import { getUserEventHistoryService } from '@/services/user/get-user-event-history-service';
import { getUserRewardService } from '@/services/user/get-user-reward-service';
import { getUserTransactionService } from '@/services/user/get-user-transaction-service';
import { getUserVoucherService } from '@/services/user/get-user-voucher-service';
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
  async getEventHistoryController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getUserEventHistoryService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getUserVoucherController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getUserVoucherService(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getUserRewardController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getUserRewardService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getTransactionController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getUserTransactionService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
