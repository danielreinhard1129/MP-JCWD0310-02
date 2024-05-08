import prisma from '@/prisma';
import { Event } from '@prisma/client';
import { create } from 'ts-node';

interface createEventParams extends Omit<Event, 'locationId'> {
  category: string;
  location: {
    city: string;
    country: string;
    subdistrict: string;
    detailAddress: string;
  };
}

export const createEventService = async (params: createEventParams) => {
  try {
    const {
      title,
      price,
      description,
      booked,
      limit,
      thumbnail,
      startDate,
      endDate,
      location,
      category,
    } = params;

    const eventTransaction = await prisma.$transaction(async (tx) => {
      const { city, country } = location;
      const newLocation = await prisma.location.create({
        data: {
          city,
          country,
          createdAt: new Date(),
        },
      });

      const newEvent = await prisma.event.upsert({
        create: {
          eventCategory: { connect: { category } },
            
        },
      });
    });
  } catch (err) {
    throw err;
  }
};
