import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function SpendingCharts() {
  const entries = useSelector(s => s.budget.entries);
  const data = [];
  // TODO: group entries by month/category
  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="expense" fill="#8884d8" />
    </BarChart>
  );
}