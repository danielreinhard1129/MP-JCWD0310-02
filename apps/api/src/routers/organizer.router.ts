import { OrganizerController } from '@/controllers/organizer.controller';
import { uploader } from '@/lib/uploader';
import { verifyToken } from '@/utils/jwt';
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
    this.router.post(
      '/',
      verifyToken,
      uploader('IMG', '/images').array('thumbnail', 1),
      this.organizerController.createEventOrganizer,
    );
    this.router.get(
      '/statistic/:id',
      this.organizerController.getOrganizerDataStatistic,
    );
    this.router.get('/transaction/:id', this.organizerController.getOrganizerTransaction);
    this.router.post('/transaction/approval', this.organizerController.postOrganizerTransactionApproval);
  }

  getRouter(): Router {
    return this.router;
  }
}
