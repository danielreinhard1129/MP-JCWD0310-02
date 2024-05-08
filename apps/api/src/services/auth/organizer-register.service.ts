import prisma from '@/prisma';
import { hashPassword } from '@/utils/bcrypt';
import { User } from '@prisma/client';

export const organizerRegisterService = async (body: User) => {
  try {
    const { firstName, lastName, email, password, role } = body;

    const isExistUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (isExistUser) {
      throw new Error('email is already registered');
    }

    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: passwordHash,
        role: 'organizer',
        referralCode: passwordHash.slice(20, 25),
      },
    });

    return {
      message: 'success register account with organizer role',
      data: user,
    };
  } catch (error) {
    throw error;
  }
};
