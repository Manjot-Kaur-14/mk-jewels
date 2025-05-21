import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "", phone: "", address: "" };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      const user = action.payload;
      state.username = user.username;
      state.phone = user.phone;
      state.address = user.address;
      console.log(state, action, user);
    },

    logout(state, action) {
      state.username = "";
      state.phone = "";
      state.address = "";
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
