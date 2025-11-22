import React, { useState } from 'react';
import EntryForm from '../components/EntryForm';
import EntryList from '../components/EntryList';
import SummaryPanel from '../components/SummaryPanel';
import SpendingCharts from '../components/SpendingCharts';
import CategoryBreakdownChart from '../components/CategoryBreakdownChart';
import TimeRangeSelector from '../components/TimeRangeSelector';

export default function Dashboard() {
  const [range, setRange] = useState('month');
  return (
    <div>
      <SummaryPanel range={range} />
      <TimeRangeSelector value={range} onChange={setRange} />
      <EntryForm />
      <EntryList />
      <SpendingCharts range={range} />
      <CategoryBreakdownChart range={range} />
    </div>
  );
}