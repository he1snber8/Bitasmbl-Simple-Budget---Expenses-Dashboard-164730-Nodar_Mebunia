import React from 'react';
import { useSelector } from 'react-redux';

export default function SummaryPanel() {
  const entries = useSelector(s => s.budget.entries);
  const total = entries.reduce((sum, e) => sum + (e.type === 'expense' ? -e.amount : e.amount), 0);
  return (
    <div>
      <h2>Net Total</h2>
      <p>{total}</p>
    </div>
  );
}