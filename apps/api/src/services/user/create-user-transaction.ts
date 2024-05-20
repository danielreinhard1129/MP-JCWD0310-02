import prisma from '@/prisma';

interface CreateUserTransaction {
  eventId: number;
  qty: number;
  total: number;
  paymentProof: string;
  voucherId: number;
  userId: number;
}

export const createUserTransactionService = async function (
  body: CreateUserTransaction,
) {
  try {
    const user = await prisma.user.findFirst({
      where: { id: body.userId },
    });

    if (!user) throw new Error('no user found');

    const event = await prisma.event.findFirst({
      where: {
        id: body.eventId,
      },
    });
    if (!event) throw new Error('event is not valid');

    const voucherCard = await prisma.voucher.findFirst({
      where: {
        id: body.voucherId,
        userId: body.userId,
      },
    });

    if (!voucherCard) throw Error;

    const newTransaction = await prisma.transaction.create({
      data: {
        eventId: event.id,
        qty: body.qty | 1,
        status: 'pending',
        total:
          event.price !== 0
            ? event.price - (event.price / 100) * voucherCard?.nominal : 1,
        paymentProof: "ok",
        userId: user.id,
        uuid: 123,
      },
    });

    if (body.voucherId) {
      const newVoucherTransaction = await prisma.transactionUserVoucher.create({
        data: {
          transactionId: newTransaction.id,
          userVoucherId: body.voucherId,
        },
      });
    }

    return {
      message: 'ok',
    };

    return {};
  } catch (error) {
    throw error;
  }
};
