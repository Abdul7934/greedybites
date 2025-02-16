import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCity: localStorage.getItem('selectedCity') || 'Mumbai'
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
      localStorage.setItem('selectedCity', action.payload);
    }
  }
});

export const { setSelectedCity } = locationSlice.actions;
export default locationSlice.reducer; 