'use client';

import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Rectangle,
} from 'recharts';

interface DataProps {
  name: string;
  data: {
    title: string;
    name: string;
    value: number;
  }[];
}

const color = [
  { color: '#f97316' },
  { color: '#55d184' },
  { color: '#0ea5e9' },
];

export function OverviewBar({ data }: { data: DataProps[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#000000" strokeWidth={2} />
        <YAxis stroke="#000000" strokeWidth={2} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill={color[0].color}
          activeBar={<Rectangle fill="blue" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill={color[1].color}
          activeBar={<Rectangle fill="pink" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
