import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  _id: string;
  userName: string;
  email: string;
}

interface UserState {
  currentUser: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  token: null,
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.loading = false;
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    authFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.currentUser = null;
      state.token = null;
    },
  },
});

export const { authFailure, authStart, authSuccess } = UserSlice.actions;

export default UserSlice.reducer;
