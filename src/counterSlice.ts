import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      const { number } = action.payload;
      state += number;
      return state;
    },
    decrement(state, action) {
      const { number } = action.payload;
      state -= number;
      return state;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
