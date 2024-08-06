import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./Actions/userSlice.action";
import storage from "redux-persist/lib/storage";
import { persistReducer, PersistConfig } from "redux-persist";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
