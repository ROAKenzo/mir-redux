import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  show: true,
};

//--counter Slicer--//
export const counterSlicer = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    increment5: (state) => {
      state.counter += 5;
    },
    decrement5: (state) => {
      state.counter -= 5;
    },
    reset: (state) => {
      state.counter = 0;
    },
    toggle: (state) => {
      state.show = !state.show;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const counterActions = counterSlicer.actions;

const store = configureStore({
  reducer: {
    counter: counterSlicer.reducer,
  },
});
export default store;
