import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  cartId: string;
}
const initialState: CartState = {
  cartId: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchSuccess: (state, action: PayloadAction<any>) => {
      state.cartId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchSuccess } = cartSlice.actions;

export default cartSlice.reducer;
