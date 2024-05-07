import { Blog } from '@prisma/client';

interface createBlog
  extends Omit<
    Blog,
    'id' | 'deletedAt' | 'createdAt' | 'updatedAt' | 'thumbnail'
  > {}

export const createBlogService = async (body, file) => {
  try {
  } catch (err) {
    throw err;
  }
};
