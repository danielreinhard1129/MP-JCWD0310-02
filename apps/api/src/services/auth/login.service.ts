import { JWT_SECRET_KEY } from '@/config';
import prisma from '@/prisma';
import { comparePassword } from '@/utils/bcrypt';
import { User } from '@prisma/client';
import { sign } from 'jsonwebtoken';

export const loginService = async (body: User) => {
  try {
    const { email, password } = body;

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw new Error('Your email is Invalid');

    const isValidPassword = comparePassword(password, user.password);

    if (!isValidPassword) throw new Error('Your password is Incorrect');

    const token = sign({ id: user.id }, JWT_SECRET_KEY, { expiresIn: '2h' });

    return {
      message: 'Success login into your account',
      data: user,
    };
  } catch (error) {
    throw error;
  }
};
