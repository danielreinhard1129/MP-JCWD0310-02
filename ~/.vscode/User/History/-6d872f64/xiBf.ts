import { Blog } from '@prisma/client';
import { Express } from 'express';

interface CreateBlog
  extends Omit<
    Blog,
    'id' | 'deletedAt' | 'createdAt' | 'updatedAt' | 'thumbnail'
  > {}

export const createBlogService = async (body : CreateBlog, file : Express.Multer.File) => {
  try {
  } catch (err) {
    throw err;
  }
};
