import { getUserDetailService } from '@/services/user/get-user-detail-service';
import { getUserEventHistoryService } from '@/services/user/get-user-event-history-service';
import { getUserRewardService } from '@/services/user/get-user-reward-service';
import { getUserTransactionHistoryService } from '@/services/user/get-user-transaction-service';
import { getUserVoucherService } from '@/services/user/get-user-voucher-service';
import { createUserTransactionService } from '@/services/user/create-user-transaction';
import { postUserEditProfileService } from '@/services/user/post-user-edit-profile';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async createUserTransaction(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await createUserTransactionService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getUserDetailController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getUserDetailService(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getEventHistoryController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 10,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
        search: (req.query.search as string) || '',
        filter: (req.query.filter as string) || '',
        userId: (req.query.userId as string) || '',
      };
      const result = await getUserEventHistoryService(query);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getUserVoucherController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getUserVoucherService(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getUserRewardController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getUserRewardService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async postEditUserProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];
      const result = await postUserEditProfileService(req.body, files[0]);
      res.status(200).send({
        messages: 'ok',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
  async getTransactionController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 10,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
        search: (req.query.search as string) || '',
        filter: (req.query.filter as string) || '',
        userId: (req.query.userId as string) || '',
      };
      const result = await getUserTransactionHistoryService(query);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
