import { createSlice } from "@reduxjs/toolkit";


const initialState = null;

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        setMealDetails: (state,action) => {
            // console.log("Payload: ", action.payload);
            return state = {...action.payload}
        },
        removeMealDetails: (state) => state = initialState,
    },
});

export const { setMealDetails, removeMealDetails } = mealSlice.actions;
export default mealSlice.reducer;