import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import restaurantReducer from './slices/restaurantSlice';
import locationReducer from './slices/locationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurants: restaurantReducer,
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
}); 