import { createSlice, nanoid } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budget',
  initialState: { entries: [], categories: [] },
  reducers: {
    addEntry: {
      reducer(state, action) { state.entries.push(action.payload); },
      prepare(data) { return { payload: { id: nanoid(), ...data } }; }
    },
    updateEntry(state, action) {},
    deleteEntry(state, action) {}
  }
});

export const { addEntry, updateEntry, deleteEntry } = budgetSlice.actions;
export default budgetSlice.reducer;