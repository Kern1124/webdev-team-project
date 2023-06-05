import { createSlice } from "@reduxjs/toolkit";

// TODO: change data based on the api endpoint
const initialState = {
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
