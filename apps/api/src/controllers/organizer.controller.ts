import { createEventService } from '@/services/organizer/create-event-service';
import { NextFunction, Request, Response } from 'express';

export class OrganizerController {
  async createEventOrganizer(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await createEventService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async testOrganizer(req: Request, res: Response, next: NextFunction) {
    try {
      // const result = await createEventService(req.body);
      res.status(200).send({
        message : "success"
      });
    } catch (error) {
      next(error);
    }
  }

}
