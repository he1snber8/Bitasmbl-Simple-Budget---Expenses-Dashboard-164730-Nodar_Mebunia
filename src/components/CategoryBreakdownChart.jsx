import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

export default function CategoryBreakdownChart() {
  const entries = useSelector(s => s.budget.entries);
  const data = [];
  const colors = ['#8884d8', '#82ca9d', '#ffc658'];
  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
        {data.map((d, i) => <Cell key={d.name} fill={colors[i % colors.length]} />)}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}