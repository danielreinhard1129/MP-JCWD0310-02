import prisma from '@/prisma';

export const getTransactionEventService = async (body: { userId: number }) => {
  try {
    const userTransaction = await prisma.user.findFirst({
      where: {
        id: body.userId,
      },
      select: {
        transaction: true,
      },
    });
    if (!userTransaction)
      return {
        message: 'No data found',
      };
    return {
      message: 'Data Found',
      data: userTransaction,
    };
  } catch (err) {
    throw err;
  }
};
