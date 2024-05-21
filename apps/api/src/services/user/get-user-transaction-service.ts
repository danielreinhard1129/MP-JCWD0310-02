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
    const events = await prisma.transaction.findMany({
      where: {
        event: {
          title: {
            contains: search,
          },
        },
        userId,
        status : filter || undefined ,
      },
      skip: (page - 1) * take,
      take: take,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        event: true,
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
