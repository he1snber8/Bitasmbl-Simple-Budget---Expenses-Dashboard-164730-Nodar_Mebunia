import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../store/budgetSlice';

export default function EntryForm() {
  const [form, setForm] = useState({ type: 'expense', amount: '', category: '', date: '' });
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(addEntry({ ...form, amount: Number(form.amount) }));
  };
  return (
    <form onSubmit={onSubmit}>
      <input name="amount" value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} />
      <button type="submit">Add</button>
    </form>
  );
}