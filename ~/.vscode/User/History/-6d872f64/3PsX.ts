import { Blog } from '@prisma/client';

interface CreateBlog
  extends Omit<
    Blog,
    'id' | 'deletedAt' | 'createdAt' | 'updatedAt' | 'thumbnail'
  > {}

export const createBlogService = async (body : CreateBlog, file) => {
  try {
  } catch (err) {
    throw err;
  }
};
