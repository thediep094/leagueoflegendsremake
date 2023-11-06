import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slice/accountSlice";
import cartReducer from "./slice/cartSlice";
import walletReducer from "./slice/walletSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    cart: cartReducer,
    wallet: walletReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
