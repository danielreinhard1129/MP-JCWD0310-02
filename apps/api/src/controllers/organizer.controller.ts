import { createEventService } from '@/services/organizer/create-event-service';
import { createPromotionService } from '@/services/organizer/create-promotion.service';
import { getOrganizerDataStatisticService } from '@/services/organizer/get-organizer-data-statistic';

import { NextFunction, Request, Response } from 'express';

export class OrganizerController {
  async createEventOrganizer(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];

      if (!files?.length) {
        throw new Error('no file uploaded');
      }
      const result = await createEventService(req.body, files[0]);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getOrganizerDataStatistic(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getOrganizerDataStatisticService(
        Number(req.params.id),
      );

      res.status(200).send({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
