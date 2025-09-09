import { configureStore } from '@reduxjs/toolkit';
import championListReducer from './slice/championListSlice';

const store = configureStore({
  reducer: { champion: championListReducer },
});

export default store;
