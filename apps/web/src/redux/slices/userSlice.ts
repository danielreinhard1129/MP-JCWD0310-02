import { User } from '@/types/user.type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  id: 0,
  fullName: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
    },
    logoutAction: (state) => {
      state.id = 0;
      state.fullName = '';
      state.email = '';
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
