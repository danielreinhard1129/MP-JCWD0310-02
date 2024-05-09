import { BlogController } from '@/controllers/blog.controller';
import { SampleController } from '@/controllers/sample.controller';
import { Router } from 'express';

export class BlogRouter {
  private router: Router;
  private blogController: BlogController;

  constructor() {
    this.blogController = new BlogController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.sampleController.getSampleData);
    this.router.get('/:id', this.sampleController.getSampleDataById);
    this.router.post('/', this.sampleController.createSampleData);
  }

  getRouter(): Router {
    return this.router;
  }
}

