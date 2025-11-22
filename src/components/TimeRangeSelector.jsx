import React from 'react';

export default function TimeRangeSelector({ value, onChange }) {
  return (
    <div>
      <button onClick={() => onChange('month')} disabled={value==='month'}>Monthly</button>
      <button onClick={() => onChange('year')} disabled={value==='year'}>Yearly</button>
    </div>
  );
}