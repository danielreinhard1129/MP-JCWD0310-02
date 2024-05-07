import prisma from '@/prisma';
import { Blog } from '@prisma/client';
import { Express } from 'express';

interface CreateBlog
  extends Omit<
    Blog,
    'id' | 'deletedAt' | 'createdAt' | 'updatedAt' | 'thumbnail'
  > {}

export const createBlogService = async (body: CreateBlog, file: Express) => {
  try {
    const { title } = body;

    const existingTitle = await prisma.blog.findFirst({
      where: { title },
    });
  } catch (err) {
    throw err;
  }
};
