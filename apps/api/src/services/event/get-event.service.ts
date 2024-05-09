import prisma from '@/prisma';

export const getEventService = async () => {
  try {
    const eventData = await prisma.event.findMany({});
    return {
      data : eventData
    };
  } catch (err) {
    throw err;
  }
};
