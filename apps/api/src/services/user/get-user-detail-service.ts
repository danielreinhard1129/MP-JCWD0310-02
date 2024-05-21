import prisma from '@/prisma';

export const getUserDetailService = async (userId: string) => {
  try {
    const userDetail = await prisma.user.findFirst({
      where: {
        id: Number(userId),
      },
    });

    return userDetail;
  } catch (err) {
    throw err;
  }
};
