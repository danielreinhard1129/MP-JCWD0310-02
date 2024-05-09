import { getEventService } from '@/services/event/get-event.service';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getEventData(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getEventService();
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
