import prisma from '@/prisma';
import { Event } from '@prisma/client';
import { create } from 'ts-node';

interface CreateEventBody
  extends Omit<Event, 'id' | 'createdAt' | 'updatedAt' | 'thumbnail'> {}

export const createEventService = async (
  body: CreateEventBody,
  file: Express.Multer.File,
) => {
  try {
    const { title, userId } = body;

    const existingTitle = await prisma.event.findFirst({
      where: { title },
    });

    if (existingTitle) {
      throw new Error('title already in use');
    }

    const user = await prisma.user.findFirst({ where: { id: Number(userId) } });

    if (!user) {
      throw new Error('user not found');
    }


    return {
      data: {
        ...body,
        thumbnail: `/images/${file.filename}`,
        userId: Number(userId),
      },
      message: 'success registrate event',
    };
  } catch (error) {
    throw error;
  }
};
