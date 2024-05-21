import prisma from '@/prisma';

export const getUserTransactionDetailService = async function (uuid: string) {
  try {
    const transaction = await prisma.transaction.findFirst({
      where: {
        uuid,
      },
      include: {
        event: {
          include: {
            location: true,
          },
        },
        user: true,
        transactionDiscount: {
          include: {
            discount: true,
          },
        },
        transactionUserReward: {
          include: {
            userReward: {
              include: {
                reward: true,
              },
            },
          },
        },
        transactionUserVoucher: {
          include: {
            userVoucher: {
              include: {
                voucher: true,
              },
            },
          },
        },
      },
    });

    return transaction;
  } catch (error) {
    throw error;
  }
};
