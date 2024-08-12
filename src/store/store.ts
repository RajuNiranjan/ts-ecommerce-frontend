import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Actions/userSlice.action";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
