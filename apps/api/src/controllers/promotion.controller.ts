import { createPromotionService } from '@/services/organizer/create-promotion.service';
import { NextFunction, Request, Response } from 'express';


export const createPromotion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await createPromotionService(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
