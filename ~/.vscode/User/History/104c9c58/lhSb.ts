import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/app/types/user.type';

const initialState: User = {
  id : null,
  userName: '',
  email: '',
  passwordHash: '',
  password: '',
  token: '',
  role: '',
  detail: {
    bio: '',
    // dateOfBirth: new Date(),
  },
};

export const userSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<Pick<User , "userName" | "password" | "token" | "id" | "passwordHash">>) => {
      state.id = action.payload.id;
      state.userName = action.payload.userName;
      state.passwordHash = action.payload.passwordHash;
      state.password = action.payload.password;
      state.token = action.payload.token;
    },
    logoutAction: (state) => {
      state.id = null;
      state.userName = '';
      state.passwordHash = '';
      state.password = '';
      state.token = '';
    },
    addDetailAction: (state, action: PayloadAction<User>) => {
      state.role = action.payload.role;
      state.detail = action.payload.detail;
    },
    deleteDetailAction: (state) => {
      state.role = '';
      // state.detail.dateOfBirth = new Date();
      state.detail.bio = '';
    },
  },
});

export const {
  loginAction,
  logoutAction,
  addDetailAction,
  deleteDetailAction,
} = userSlicer.actions;

export default userSlicer.reducer;
