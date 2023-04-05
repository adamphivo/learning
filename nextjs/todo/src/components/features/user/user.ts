import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    favorites: [],
  },
  reducers: {
    log: (state) => {
      console.log(state);
    },
  },
});

export const { log } = userSlice.actions;

export default userSlice.reducer;
