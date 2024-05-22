import prisma from '@/prisma';

const getOrganizerTransactionController = async (id: number) => {
  try {
    const userOrganizer = await prisma.user.findFirst({
      where: {
        id,
        role: 'organizer',
      },
    });
    if (!userOrganizer) throw new Error('You are not an organizer');
    const event = await prisma.event.findMany({
      where: {
        userId: userOrganizer.id,
      },
      include: {
        transaction: true,
      },
    });
    return event;
  } catch (error) {
    throw error;
  }
};

export default getOrganizerTransactionController;
