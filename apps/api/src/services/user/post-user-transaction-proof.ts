import prisma from '@/prisma';

interface PostProofProps {
  userId: string;
  eventId: string;
  uuid: string;
}

export const postUserTransactionProofService = async (
  body: PostProofProps,
  file: Express.Multer.File,
) => {
  try {
    const userId = Number(body.userId);
    const eventId = Number(body.eventId);
    const { uuid } = body;
    const { filename } = file;
    const transaction = await prisma.transaction.findFirst({
      where: {
        eventId,
        userId,
        uuid,
      },
    });
    if (!transaction) throw new Error("Can't find your transaction!");
    const updateTransaction = await prisma.transaction.update({
      where: {
        id: transaction.id,
      },
      data: {
        paymentProof: filename ? `/images/${filename}` : undefined,
      },
    });
    return {
      message: 'Success upload proof',
    };
  } catch (error) {
    throw error;
  }
};
