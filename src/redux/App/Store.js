import { configureStore } from '@reduxjs/toolkit';
import contactSlice from '../Features/contactSlice';

const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
});

export default store;
