import prisma from '@/prisma';

export const getOrganizerDataStatisticService = async (id: number) => {
  try {
    var date = new Date();
    const totalEvents = await prisma.event.count({
      where: {
        userId: id,
        user: {
          role: 'organizer',
        },
      },
      select: {
        _all: true,
      },
    });
    const averageTicketPrice = await prisma.event.aggregate({
      _avg: {
        price: true,
      },
      where: {
        userId: id,
        user: {
          role: 'organizer',
        },
      },
    });
    const ticketSoldOverall = await prisma.transaction.count({
      where: {
        event: {
          userId: id,
          user: {
            role: 'organizer',
          },
        },
      },
    });
    const ticketRevenue = await prisma.transaction.aggregate({
      _sum: {
        total: true,
      },
      where: {
        event: {
          userId: id,
          user: {
            role: 'organizer',
          },
        },
      },
    });
    const soldInThisMonth = await prisma.event.findMany({
      where: {
        // userId: id,
        // user: {
        //   role: 'organizer',
        // },
        startDate: {
          gte: new Date(date.getFullYear(), date.getMonth(), 1),
          lte: new Date(date.getFullYear(), date.getMonth() + 1, 0),
        },
      },
    });
    return {
      message: 'Data Found',
      data: {
        totalEvents,
        averageTicketPrice,
        ticketSoldOverall,
        ticketRevenue,
        soldInThisMonth,
      },
    };
  } catch (err) {
    throw err;
  }
};
