import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoxShadowParameters, ShadowlySate } from 'src/typings/shadowly.types';

const initialState: ShadowlySate = {
  boxShadow: {
    horizontalOffset: 10,
    verticalOffset: 15,
    blurRadius: 20,
    blurSpread: 25,
    color: '#454545',
    colorOpacity: 50,
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
    setHorizontalOffset: (state: ShadowlySate, action: PayloadAction<number>) => {
      Object.assign(state, { boxShadow: { ...state.boxShadow, horizontalOffset: action.payload } });
    },
    setVerticalOffset: (state: ShadowlySate, action: PayloadAction<number>) => {
      Object.assign(state, { boxShadow: { ...state.boxShadow, verticalOffset: action.payload } });
    },
    setBlurRadius: (state: ShadowlySate, action: PayloadAction<number>) => {
      Object.assign(state, { boxShadow: { ...state.boxShadow, blurRadius: action.payload } });
    },
    setBlurSpread: (state: ShadowlySate, action: PayloadAction<number>) => {
      Object.assign(state, { boxShadow: { ...state.boxShadow, blurSpread: action.payload } });
    },
    setColor: (state: ShadowlySate, action: PayloadAction<string>) => {
      Object.assign(state, { boxShadow: { ...state.boxShadow, color: action.payload } });
    },
    setColorOpacity: (state: ShadowlySate, action: PayloadAction<number>) => {
      Object.assign(state, { boxShadow: { ...state.boxShadow, colorOpacity: action.payload } });
    },
  },
});

// Expor the actions.
export const {
  setBoxShadow,
  clearBoxShadow,
  setHorizontalOffset,
  setVerticalOffset,
  setBlurRadius,
  setBlurSpread,
  setColor,
  setColorOpacity,
} = shadowlySlice.actions;

// Export the state selectors used in useSelector Hook.
export const selectBoxShadow = (state: ShadowlySate) => state.boxShadow;
