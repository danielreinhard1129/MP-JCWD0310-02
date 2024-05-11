import prisma from '@/prisma';
import { Event } from '@prisma/client';
import { create } from 'ts-node';

interface createEventParams extends Omit<Event, 'locationId'> {
  userId: number;
  category: string;
  city: string;
  country: string;
}

export const createEventService = async (params: createEventParams) => {
  try {
    const userId = Number(params.userId);
    const price = Number(params.price);
    const booked = Number(params.booked);
    const limit = Number(params.limit);
    const {
      title,
      description,
      thumbnail,
      startDate,
      endDate,
      city,
      country,
      category,
    } = params;

    const dateNow = new Date();

    const eventTransaction = await prisma.$transaction(async (tx) => {

      const isUserOrganizer = await prisma.user.findFirst({
        where: {
          AND: {
            role: 'organizer',
            id: userId,
          },
        },
      });

      if (!isUserOrganizer)
        throw new Error(
          "Your account registered as customer,you can't create event",
        );

      const findCategory = await prisma.category.findFirst({
        where: {
          isDeleted: false,
          title: category,
        },
      });

      const newCategory = findCategory
        ? findCategory
        : await prisma.category.create({
            data: {
              title: category,
              isDeleted: false,
              description: category,
              createdAt: dateNow,
              updatedAt: dateNow,
            },
          });

      const isLocationExist = await prisma.location.findFirst({
        where: {
          city,
          country,
        },
      });

      const locationData = isLocationExist
        ? isLocationExist
        : await prisma.location.create({
            data: {
              city,
              country,
              createdAt: dateNow,
            },
          });

      const newEvent = await prisma.event.create({
        data: {
          title,
          description,
          startDate,
          endDate,
          price: price,
          limit: limit,
          booked: 0,
          thumbnail,
          createdAt: dateNow,
          updatedAt: dateNow,
          location: {
            connectOrCreate: {
              where: {
                id: locationData.id,
              },
              create: {
                city,
                country,
                createdAt: dateNow,
              },
            },
          },
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });

      const newEventCategory = await prisma.eventCategory.create({
        data: {
          categoryId: findCategory ? findCategory.id : newCategory.id,
          eventId: newEvent.id,
          createdAt: dateNow,
          updatedAt: dateNow,
        },
      });

    });

    return {
      data: eventTransaction,
      message: 'success registrate event',
    };
  } catch (err) {
    throw err;
  }
};
