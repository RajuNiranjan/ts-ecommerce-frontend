import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  userName: string;
  email: string;
}

interface UserState {
  user: User | null;
  token: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  token: "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authStarts: (state) => {
      state.error = null;
      state.loading = true;
      state.token = "";
      state.user = null;
    },

    authSuccess: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },

    authFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
      state.user = null;
      state.token = "";
    },
  },
});

export const { authFailure, authStarts, authSuccess } = userSlice.actions;

export default userSlice.reducer;
