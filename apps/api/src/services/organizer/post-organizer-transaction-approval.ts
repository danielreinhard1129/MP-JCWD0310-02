import prisma from '@/prisma';

interface Payload {
  userId: string;
  uuid: string;
  status: string;
}

export const postOrganizerTransactionApprovalService = async (
  body: Payload,
) => {
  try {
    const userOrganizer = await prisma.user.findFirst({
      where: {
        id: Number(body.userId),
        role: 'organizer',
      },
    });

    if (!userOrganizer) throw new Error('Not organizer');

    const transaction = await prisma.transaction.findFirst({
      where: {
        uuid: body.uuid,
      },
    });

    if (!transaction) throw new Error('Something error with the transaction');

    const updateTransaction = await prisma.transaction.update({
      where: {
        id: transaction.id,
      },
      data: {
        status: body.status,
      },
    });
    return { updateTransaction };
  } catch (error) {
    throw error;
  }
};
