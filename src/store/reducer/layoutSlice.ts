import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LayoutState {
  isBottomNavVisible: boolean;
}

const initialState: LayoutState = {
  isBottomNavVisible: true,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setBottomNavVisibility(state, action: PayloadAction<boolean>) {
      state.isBottomNavVisible = action.payload;
    },
  },
});

export const { setBottomNavVisibility } = layoutSlice.actions;
export default layoutSlice.reducer;