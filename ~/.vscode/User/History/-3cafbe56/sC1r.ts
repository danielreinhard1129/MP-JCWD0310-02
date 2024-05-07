import { Request, Response } from 'express';
import prisma from '@/prisma';
import { createBlogService } from '@/services/blog/create-blog.service';

export class BlogController {
  async createBlog(req: Request, res: Response) {
    const files = req.files as Express.Multer.File[];

    if (!files.length) {
      throw new Error('no file uploaded');
    }

    const result = await createBlogService(req.body, files[0]);

    return res.status(200).send(result);
  }
}
