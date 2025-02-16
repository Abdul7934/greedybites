import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurants: [],
  loading: false,
  error: null
};

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    fetchRestaurantsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRestaurantsSuccess: (state, action) => {
      state.loading = false;
      state.restaurants = action.payload;
    },
    fetchRestaurantsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { 
  fetchRestaurantsStart, 
  fetchRestaurantsSuccess, 
  fetchRestaurantsFailure 
} = restaurantSlice.actions;

export default restaurantSlice.reducer; 