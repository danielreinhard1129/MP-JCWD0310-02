import { EventController } from '@/controllers/event.controller';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.router = Router();
    this.eventController = new EventController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.eventController.getEventsController);
    this.router.get('/:id', this.eventController.getEventController);
  }

  getRouter(): Router {
    return this.router;
  }
}
