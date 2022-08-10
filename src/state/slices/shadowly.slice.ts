import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoxShadowParameters, ShadowlySate } from 'src/typings/shadowly.types';

const initialState: ShadowlySate = {
  boxShadow: {
    horizontalOffset: 0,
    verticalOffset: 0,
  },
};

// Creating the slice.
export const shadowlySlice = createSlice({
  initialState,
  name: 'shadowly',
  reducers: {
    setBoxShadow: (state: ShadowlySate, action: PayloadAction<BoxShadowParameters>) => {
      Object.assign(state, { boxShadow: action.payload });
    },
    clearBoxShadow: (state: ShadowlySate) => {
      Object.assign(state, { boxShadow: {} });
    },
  },
});

// Expor the actions.
export const { setBoxShadow, clearBoxShadow } = shadowlySlice.actions;

// Export the state selectors used in useSelector Hook.
export const selectBoxShadow = (state: ShadowlySate) => state.boxShadow;
