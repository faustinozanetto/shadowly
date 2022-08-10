import { configureStore } from '@reduxjs/toolkit';
import { shadowlySlice } from './slices/shadowly.slice';

// Configure and export the store.
export const store = configureStore({
  reducer: shadowlySlice.reducer,
});

// Utility types.
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
