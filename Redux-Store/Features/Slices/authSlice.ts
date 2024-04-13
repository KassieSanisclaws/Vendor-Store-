import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: sessionStorage.getItem("userInfo") ?? "",
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      //user data info name, email, token, id example set into storage.
      state.userInfo = action.payload;
      sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    //logot to clear the storage and set the user info to null
    logout: (state) => {
      state.userInfo = "";
      sessionStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;