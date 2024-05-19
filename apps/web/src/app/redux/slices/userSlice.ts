import { User } from '@/app/types/user.type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Pick<
  User,
  | 'userId'
  | 'token'
  | 'firstName'
  | 'lastName'
  | 'pictureId'
  | 'email'
  | 'detail'
  | 'points'
  | 'role'
  | 'referralCode'
  | 'thumbnail'
> = {
  userId: null,
  firstName: '',
  lastName: '',
  pictureId: '',
  points : 0,
  email: '',
  role: '',
  token: '',
  thumbnail : [],
  referralCode: '',
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
      state.referralCode = action.payload.referralCode;
      state.points = action.payload.points;
      state.thumbnail = action.payload.thumbnail;
      state.firstName = action.payload.firstName;
      state.pictureId = action.payload.pictureId;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    logoutAction: (state) => {
      state.userId = null;
      state.role = '';
      state.points = 0;
      state.firstName = '';
      state.thumbnail = [];
      state.referralCode = '';
      state.pictureId = '';
      state.lastName = '';
      state.email = '';
    },
    getUserDetail: (state, action: PayloadAction<User>) => {
      state.detail = action.payload.detail;
    },
  },
});

export const { loginAction, logoutAction, getUserDetail } = userSlice.actions;

export default userSlice.reducer;
