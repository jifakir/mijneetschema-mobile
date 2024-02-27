import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dietplanDetails: ''
};


export const dietplanSlice = createSlice({
    name: 'dietplan',
    initialState,
    reducers: {
        setDietplan: (state,action) => {
            state.dietplanDetails = action.payload
        },
        removeDietplan: (state) => state = initialState,
    },
});

export const { setDietplan, removeDietplan } = dietplanSlice.actions;
export default dietplanSlice.reducer;