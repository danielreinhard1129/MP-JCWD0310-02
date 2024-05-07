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
    const { title , userId} = body;

    const existingTitle = await prisma.blog.findFirst({
      where: { title },
    });

    if ( existingTitle ) {
        throw new Error("title already use")
    }

    const user = await prisma.user.findFirst({where : {id : userId}})

  } catch (err) {
    throw err;
  }
};
