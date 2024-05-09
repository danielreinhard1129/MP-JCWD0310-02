import { OrganizerController } from '@/controllers/organizer.controller';
import { Router } from 'express';

export class OrganizerRouter {
  private router: Router;
  private organizerController: OrganizerController;

  constructor() {
    this.router = Router();
    this.organizerController = new OrganizerController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/event', this.organizerController.createEventOrganizer);
    this.router.get('/event', this.organizerController.testOrganizer);
  }

  getRouter(): Router {
    return this.router;
  }
}
