import prisma from '@/prisma';
import { Event } from '@prisma/client';

interface createEventParams extends Omit<Event, 'locationId'> {
  // userId: number;
  category: string;
  address: string;
  city: string;
  province: string;
  country: string;
}

export const createEventService = async (params: createEventParams,file: Express.Multer.File,) => {
  try {
    const userId = Number(params.userId);
    const price = Number(params.price);
    const startDate = new Date(params.startDate);
    const endDate = new Date(params.endDate);
    const booked = Number(params.booked);
    const limit = Number(params.limit);
    const {
      title,
      description,
      time,
      address,
      city,
      province,
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
          address,
          city,
          province,
          country,
        },
      });

      const locationData = isLocationExist
        ? isLocationExist
        : await prisma.location.create({
            data: {
              address,
              city,
              province,
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
          time,
          isFree: false,
          price: price,
          limit: limit,
          booked,
          thumbnail: `/images/${file.filename}`,
          createdAt: dateNow,
          updatedAt: dateNow,
          location: {
            connectOrCreate: {
              where: {
                id: locationData.id,
              },
              create: {
                address,
                city,
                province,
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
