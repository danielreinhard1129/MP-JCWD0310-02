import prisma from '@/prisma';
import { hashPassword } from '@/utils/bcrypt';
import { User } from '@prisma/client';

interface ForgotPasswordParams extends Pick<User, 'email'> {
  resetCode: string;
  newPassword: string;
}

export const forgotPassword = async (body: ForgotPasswordParams) => {
  try {
    const { email, resetCode, newPassword } = body;

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new Error('Email is not valid');
    }

    const newHashedPassword = await hashPassword(newPassword);

    const newUserPassword = await prisma.user.update({
      where: { email },
      data: {
        password: newHashedPassword,
      },
    });

    return {
      message: 'success reset password',
      newUserPassword,
    };
  } catch (error) {
    throw error;
  }
};
