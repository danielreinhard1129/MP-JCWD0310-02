import prisma from '@/prisma';
import { PaginationQueryParams } from '@/types/pagination.type';
interface GetEventsQuery extends PaginationQueryParams {
  search: string;
  filter: string;
  userId: string;
}

export const getUserTransactionHistoryService = async function (
  query: GetEventsQuery,
) {
  try {
    const userId = Number(query.userId);
    const { page, sortBy, sortOrder, take, search, filter } = query;
    const events = await prisma.event.findMany({
      where: {
        title: {
          contains: search,
        },
        userId,
        transaction: {
          some: {
            status: {
              contains: filter,
            },
          },
        },
      },
      skip: (page - 1) * take,
      take: take,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        transaction: true,
        location: true,
      },
    });

    return {
      data: events,
      meta: { page, take, total: 1 },
    };

    return events;
  } catch (error) {
    throw error;
  }
};
