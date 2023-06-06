import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setaddContact: (state, action) => {
      state.push(action.payload);
    },
    removeContact: (state, action) => {
      const contactId = action.payload;
      return state.filter(contact => contact.id !== contactId);
    },
    updateContact: (state, action) => {
      const { id, firstName, lastName, status } = action.payload;
      const contactIndex = state.findIndex(contact => contact.id === id);
      if (contactIndex !== -1) {
        state[contactIndex] = { ...state[contactIndex], firstName, lastName, status };
      }
    },
  },
});

export const { setaddContact,removeContact,updateContact} = contactsSlice.actions;

export default contactsSlice.reducer;
