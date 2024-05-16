import { IFormCreatePromotion } from '@/types/promotion.type';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPromotionService = async (formData: IFormCreatePromotion) => {
  try {
    const promotion = await prisma.discount.create({
      data: formData,
    });
    return promotion;
  } catch (error) {
    throw new Error('Could not create promotion');
  }
};
