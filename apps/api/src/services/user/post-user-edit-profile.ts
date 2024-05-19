import prisma from '@/prisma';
import { comparePassword, hashPassword } from '@/utils/bcrypt';

interface EditProfilePayload {
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  currentPassword: string;
  newPassword: string;
}

export const postUserEditProfileService = async (
  body: EditProfilePayload,
  file: Express.Multer.File,
) => {
  try {
    console.log(body);

    if (!body.userId) throw new Error('No userid!');
    const userId = Number(body.userId);
    const { filename } = file;
    const { currentPassword, newPassword, email, firstName, lastName } = body;

    const isUserValid = await prisma.user.findFirst({
      where: {
        email: email,
        id: userId,
      },
    });

    if (!isUserValid) throw new Error('No users found');

    const newHashedPassword = await hashPassword(body.newPassword);

    const isPasswordValid = await comparePassword(
      currentPassword,
      isUserValid.password,
    );

    if (!isPasswordValid) throw new Error('Your password is incorrect');

    const user = await prisma.user.update({
      where: {
        id: userId,
        email: email,
      },
      data: {
        pictureId: filename ? `/images/${filename}` : undefined,
        firstName: body.firstName,
        lastName: body.lastName,
        password: newHashedPassword,
      },
    });

    if (!user) throw new Error('Something is error');

    return {
      message: 'Success',
    };
  } catch (error) {
    throw error;
  }
};
