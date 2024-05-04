import { User } from '@/app/types/user.type';
import { NEXT_PUBLIC_BASE_API_URL } from '@/app/utils/config';
import axios from 'axios';

export const useLogin = async (body: Pick<User, 'password' | 'email'>) => {
  try {
    const { password, email } = body;

    const result = axios.post(NEXT_PUBLIC_BASE_API_URL + '/auth/login', {
      password,
      email,
    });

    return {
      result,
    };
  } catch (err) {
    throw err;
  }
};
