import prisma from '@/prisma';

export const getUserTransactionService = async (body: { userId: number }) => {
  try {
    const userTransaction = await prisma.user.findMany({
      where: {
        id: body.userId,
      },
      select: {
        transaction: true,
      },
    });

    if (!userTransaction) throw new Error('No data Found');

    return {
      messages: 'data found',
      data: userTransaction,
    };
  } catch (error) {
    throw error;
  }
};
