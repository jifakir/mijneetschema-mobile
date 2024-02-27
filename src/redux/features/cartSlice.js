import { createSlice } from '@reduxjs/toolkit';
import { Toast } from 'toastify-react-native';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itmIdx = state.findIndex((itm) => itm._id === action.payload._id);
      if (itmIdx >= 0) {
        Toast.info('Artikelen al in de winkelwagen!');
        return state;
      }
      Toast.success('Artikel toegevoegd in winkelwagen!');
      return [...state, { ...action.payload }];
    },
    removeFromCart: (state, action) => {
      Toast.warning('Artikel verwijderd uit winkelwagen!');
      return (state = state.filter((v) => v._id !== action.payload.id));
    },
    changeQuantity: (state, { payload }) => {
      const itmIdx = state.findIndex((itm) => itm._id === payload.id);
      state[itmIdx].qty = payload.qty;
    },
    clearCart: () => initialState,
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
