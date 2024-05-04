import prisma from '@/prisma';
import { hashPassword } from '@/utils/bcrypt';

export const registerService = async (body: any) => {
  try {
    const { userName, email, password, userType } = body;

    const userIsExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userIsExist)
      throw new Error('Your email is registered to another account');

    const passwordHash = await hashPassword(password);
    
    const user = await prisma.user.create({
      data: {
        email,
        userName,
        passwordHash,
        userType: userType || userType == 'organizer' ? 'organizer' : 'client',
      },
    });

    return {
      message: 'Success register new account',
      data: user,
    };
  } catch (error) {
    throw error;
  }
};
