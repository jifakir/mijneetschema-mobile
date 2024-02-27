import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentDetails: '',
  paymentId: '',
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
    setPaymentId: (state, action) => {
      state.paymentId = action.payload;
    },
    removePaymentDetails: (state) => (state = initialState),
  },
});

export const { setPaymentDetails, setPaymentId, removePaymentDetails } =
  paymentSlice.actions;
export default paymentSlice.reducer;
