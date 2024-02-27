import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  guestUser: '',
  userDetails: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.userDetails = action.payload;
    },
    logOut: (state) => {
      // initialState,
      (state.isLoggedIn = false),
        (state.guestUser = ''),
        (state.userDetails = {});
    },
    guestUser: (state, { payload }) => {
      state.guestUser = payload.email;
    },
    clearGuest: (state) => {
      state.guestUser = '';
    },
  },
});

export const { logIn, logOut, guestUser, clearGuest } = authSlice.actions;
export default authSlice.reducer;
