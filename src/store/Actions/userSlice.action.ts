import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  userName: string;
  email: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  token: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
    },
    registerSuccess: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      state.loading = false;
      state.error = null;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  UserSlice.actions;

export default UserSlice.reducer;
