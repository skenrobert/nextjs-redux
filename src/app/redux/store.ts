import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { userApi } from "./services/userApi"; 
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    counterReducer, //declaret function and value for all aplication
   [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => //configuration for default used userApi hooks automatelly redux
    getDefaultMiddleware().concat([userApi.middleware]),
});

setupListeners(store.dispatch);// for async function

export type RootState = ReturnType<typeof store.getState>; //export type data in the counter
export type AppDispatch = typeof store.dispatch;// export function