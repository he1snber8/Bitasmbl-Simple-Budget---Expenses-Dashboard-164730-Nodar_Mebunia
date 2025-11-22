import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEntry } from '../store/budgetSlice';

export default function EntryList() {
  const entries = useSelector(s => s.budget.entries);
  const dispatch = useDispatch();
  return (
    <ul>
      {entries.map(e => (
        <li key={e.id}>
          {e.type}: {e.amount}
          <button onClick={() => dispatch(deleteEntry(e.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}