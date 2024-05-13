import { User } from '@/app/types/user.type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { profile } from 'console';

const initialState: Pick<
  User,
  | 'userId'
  | 'token'
  | 'firstName'
  | 'profile'
  | 'lastName'
  | 'email'
  | 'detail'
  | 'role'
> = {
  userId: null,
  firstName: '',
  lastName: '',
  email: '',
  role: '',
  token: '',
  profile: '',
  detail: {
    bio: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      state.userId = action.payload.id;
      state.role = action.payload.role;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.profile = action.payload.profile;
    },
    logoutAction: (state) => {
      state.userId = null;
      state.role = '';
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.profile = '';
    },
    getUserDetail: (state, action: PayloadAction<User>) => {
      state.detail = action.payload.detail;
    },
  },
});

export const { loginAction, logoutAction, getUserDetail } = userSlice.actions;

export default userSlice.reducer;
