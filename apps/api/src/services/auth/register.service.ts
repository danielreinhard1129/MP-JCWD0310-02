import prisma from '@/prisma';
import { hashPassword } from '@/utils/bcrypt';
import { User } from '@prisma/client';

import randomstring from 'randomstring';

export const registerService = async (body: User) => {
  try {
    const { firstName, lastName, email, password, referralCode } = body;

    const userIsExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userIsExist)
      throw new Error('Your email is registered to another account!');

    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: passwordHash,
        referralCode: randomstring.generate(10),
      },
    });

    if (referralCode) {
      const referral = await prisma.$transaction(async (tx) => {
        try {
          const referrerUser = await tx.user.findFirst({
            where: {
              referralCode,
            },
          });

          if (!referrerUser) {
            throw new Error('Your referral code is invalid');
          }

          const extendsPointExpired = referrerUser.pointsExpired
            ? new Date(
                referrerUser.pointsExpired.setMonth(
                  referrerUser.pointsExpired.getMonth() + 3,
                ),
              )
            : new Date(new Date().setMonth(new Date().getMonth() + 3));

          const referrerAddPoint = await tx.user.update({
            where: {
              id: referrerUser.id,
            },
            data: {
              points: {
                increment: 10000,
              },
              pointsExpired: extendsPointExpired,
            },
          });

          const referralHistory = await tx.referralHistory.create({
            data: {
              referralId: user.id,
              referredId: referrerUser.id,
            },
          });

          const expiredReward = new Date(
            new Date().setMonth(new Date().getMonth() + 3),
          );

          const reward = await tx.reward.create({
            data: {
              title: 'New User Voucher',
              description: '10% Discount on every transaction FOR YOU!!',
              endDate: expiredReward,
              startDate: new Date(),
              percentage: 10,
              max_nominal: 50000,
            },
          });

          const userReward = await tx.userReward.create({
            data: {
              isUsed: false,
              userId: user.id,
              rewardId: reward.id,
            },
          });
          
          return user;
        } catch (error) {
          throw error;
        }
      });
    }

    return {
      message: 'Success register new account',
      data: user,
    };
  } catch (error) {
    throw error;
  }
};
