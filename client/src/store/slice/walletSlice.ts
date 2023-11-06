import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  balance: 0,
};

export const walletSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeBalance: (state, action: PayloadAction<any>) => {
      state.balance = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeBalance } = walletSlice.actions;

export default walletSlice.reducer;
