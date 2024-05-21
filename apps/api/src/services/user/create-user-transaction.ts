import prisma from '@/prisma';

import randomstring from 'randomstring';

interface CreateUserTransaction {
  eventId: number;
  qty: number;
  voucherId: number;
  rewardId: number;
  userId: number;
  isUsePoint: boolean;
}

const functionDiscount = (
  price: number,
  discount: number | null | undefined,
  maxDiscount: number | undefined,
  qty: number,
) => {
  if (discount && maxDiscount) {
    const discountValue = (price * qty) / discount;
    const priceAfterDiscount =
      price * qty -
      (discountValue >= maxDiscount ? maxDiscount : discountValue);
    return priceAfterDiscount;
  } else return price * qty;
};

export const createUserTransactionService = async function (
  body: CreateUserTransaction,
) {
  try {
    const user = await prisma.user.findFirst({
      where: { id: body.userId },
    });

    if (body.qty <= 0) throw new Error('qty minimum is 0');
    if (!user) throw new Error('no user found');

    const transaction = await prisma.$transaction(async (tx) => {
      try {
        const event = await tx.event.findFirst({
          where: {
            id: body.eventId,
            endDate: {
              gte: new Date(),
            },
          },
        });
        if (!event) throw new Error('Event is not valid');
        if (event.booked >= event.limit)
          throw new Error('Event ticket is sold out');
        if (body.qty > event.limit - event.booked)
          throw new Error('Event ticket is not enough');

        const voucherCard = await prisma.voucher.findFirst({
          where: {
            id: body.voucherId,
            userId: body.userId,
            endDate: {
              gte: new Date(),
            },
          },
          include: {
            userVoucher: true,
          },
        });

        const userReward = await prisma.userReward.findFirst({
          where: {
            userId: user.id,
          },
          include: {
            reward: true,
          },
        });

        const priceTotalVoucher = functionDiscount(
          event.price,
          voucherCard?.nominal,
          voucherCard?.limit,
          body.qty,
        );

        const priceTotalReward = functionDiscount(
          event.price,
          userReward?.reward.percentage,
          userReward?.reward.max_nominal,
          body.qty,
        );

        if (!priceTotalVoucher) throw new Error('Something errors');
        if (!priceTotalReward) throw new Error('Something errors');

        const newTransaction = await tx.transaction.create({
          data: {
            eventId: event.id,
            qty: body.qty,
            status: 'pending',
            total: priceTotalVoucher || priceTotalReward,
            pointUsed: body.isUsePoint ? user.points : 0,
            userId: user.id,
            uuid: randomstring.generate(20).toLowerCase(),
          },
        });

        if (!newTransaction) throw new Error('Cannot create new transaction');

        const updateEvent = await tx.event.update({
          where: {
            id: event.id,
          },
          data: {
            booked: {
              increment: body.qty,
            },
          },
        });

        if (voucherCard) {
          const userVoucherTransaction = await tx.userVoucher.findFirst({
            where: {
              userId: user.id,
              voucherId: voucherCard.id,
            },
          });
          if (!userVoucherTransaction)
            throw new Error("Can't find user voucher");
          const newVoucherTransaction = await tx.transactionUserVoucher.create({
            data: {
              transactionId: newTransaction.id,
              userVoucherId: userVoucherTransaction.id,
            },
          });
          const updateVoucherHistory = await tx.voucher.update({
            where: {
              id: voucherCard.id,
            },
            data: {
              isClaim: true,
            },
            include: {
              userVoucher: true,
            },
          });

          const updateUserVoucherHistory = await tx.userVoucher.update({
            where: {
              id: userVoucherTransaction.id,
            },
            data: {
              isUsed: true,
            },
          });
        }

        if (userReward) {
          const userRewardTransaction = await tx.userReward.findFirst({
            where: {
              userId: user.id,
              rewardId: userReward.id,
            },
          });
          if (!userRewardTransaction)
            throw new Error("Can't find user voucher");
          const newRewardTransaction = await tx.transactionUserReward.create({
            data: {
              transactionId: newTransaction.id,
              userRewardId: userRewardTransaction.id,
            },
          });

          const updateUserVoucherHistory = await tx.userReward.update({
            where: {
              id: userRewardTransaction.id,
            },
            data: {
              isUsed: true,
            },
          });
        }

        return newTransaction;
      } catch (error) {
        throw error;
      }
    });

    return {
      message: 'Success',
      data: transaction.uuid,
    };

    return {};
  } catch (error) {
    throw error;
  }
};
