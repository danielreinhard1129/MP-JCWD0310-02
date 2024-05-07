import prisma from '@/prisma';
import { hashPassword } from '@/utils/bcrypt';
import { Prisma, User } from '@prisma/client';

interface RegisterServiceParams {
  firstName : string;
  lastName : string;
  email : string;
  password : string;
}

export const registerService = async (body: User) => {
  try {
    const { firstName , lastName , email, password } = body;

    const userIsExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userIsExist)
      throw new Error('Your email is registered to another account');

    const passwordHash = await hashPassword(password);
    const refferralCode = (await hashPassword(email)).toLowerCase();
    
    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: passwordHash,
        referralCode : refferralCode.slice(15,25),
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
