import prisma from '@/prisma';

export const getUserVoucherService = async (id: number ) => {
  try {
    if (!id) throw new Error('No userid!');
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
        id: id,
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
