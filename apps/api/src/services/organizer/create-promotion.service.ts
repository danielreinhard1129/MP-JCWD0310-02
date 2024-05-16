import prisma from '@/prisma';
import { Discount } from '@prisma/client';

interface CreatePromotionParams {
  code: string;
  discount: number;
  startDate: Date;
  endDate: Date;
  maxUses: number;
}

export const createPromotionService = async (params: CreatePromotionParams) => {
  try {
    const { code, discount, startDate, endDate, maxUses } = params;

    const dateNow = new Date();

      const newPromotion: Discount = await prisma.discount.create({
        data: {
          code,
          discount,
          startDate,
          endDate,
          maxUses,
          createdAt: dateNow,
          updatedAt: dateNow,
        },
      });

      // Add any additional logic if needed

      return newPromotion;
    });

    return {
      message: 'Success creating promotion',
    };
  } catch (err) {
    throw err;
  }
};
