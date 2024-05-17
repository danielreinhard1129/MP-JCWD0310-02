import prisma from '@/prisma';

export const getUserEventHistoryService = async function (body: { userId: number }) {
  try {
    const userEventHistory = await prisma.user.findMany({
      where: {
        id: body.userId,
      },
      select: {
        transaction: {
          where: {
            OR: [{ status: 'success' }, { status: 'progress' }],
          },
        },
      },
    });

    if (!userEventHistory) throw new Error('No data found');

    return {
      message: 'Data found',
      data: userEventHistory,
    };
  } catch (error) {
    throw error;
  }
};
