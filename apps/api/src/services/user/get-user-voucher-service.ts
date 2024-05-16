import prisma from '@/prisma';

export const getUserVoucherService = async (body: { userId: number }) => {
  try {
    if (!body.userId) throw new Error('No userid!');
    const userVoucher = await prisma.user.findMany({
      select: {
        userReward: {
          where: {
            isUsed: false,
          },
          include: {
            reward: true,
          },
        },
        userVoucher: {
          where: {
            isUsed: false,
          },
          include: {
            voucher: true,
          },
        },
      },
      where: {
        id: body.userId,
      },
    });

    if (!userVoucher) throw new Error('No data found');

    return {
      message: 'Data Found',
      data: userVoucher,
    };
  } catch (error) {
    throw error;
  }
};
