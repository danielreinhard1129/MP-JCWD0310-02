import prisma from '@/prisma';
import { hashPassword } from '@/utils/bcrypt';
import { Prisma, User } from '@prisma/client';

interface RegisterServiceParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const registerService = async (body: User) => {
  try {
    const { firstName, lastName, email, password, referralCode } = body;

    const userIsExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userIsExist)
      throw new Error('Your email is registered to another account');

    const passwordHash = await hashPassword(password);
    const newReferralCode = (await hashPassword(email)).toLowerCase();

    const referral = await prisma.$transaction(async (tx) => {
      const newExpiredDate = new Date(
        new Date().setMonth(new Date().getMonth() + 3),
      );

      const user = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          password: passwordHash,
          referralCode: newReferralCode.slice(15, 25),
        },
      });

      if (referralCode) {
        const addUserPoint = await prisma.user.update({
          where: {
            referralCode,
          },
          data: {
            points: {
              increment: 10000,
            },
            pointsExpired: newExpiredDate,
          },
        });

        if (!addUserPoint)
          throw new Error('Referral Code not Valid / not Exist');

        const referralHistory = await prisma.referralHistory.create({
          data: {
            referralId: user.id,
            referredId: addUserPoint.id,
          },
        });

        const expiredVoucher = new Date(
          new Date().setMonth(new Date().getMonth() + 12),
        );

        const voucherDiscount = await prisma.reward.create({
          data: {
            title: 'New User Voucher',
            description: '10% Discount on every transaction FOR YOU!!',
            endDate: expiredVoucher,
            startDate: new Date(),
            percentage: 10,
            max_nominal: 50000,
          },
        });

        const userReward = await prisma.userReward.create({
          data: {
            isUsed: false,
            userId: user.id,
            rewardId: voucherDiscount.id,
          },
        });
      }
      return user;
    });

    return {
      message: 'Success register new account',
      data: referral,
    };
  } catch (error) {
    throw error;
  }
};
