import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { password, ...returnUser } = action.payload.user;
      state.user = action.payload.user;
    },
  },
});

export const { loginSuccess } = userSlice.actions;

export default userSlice.reducer;
