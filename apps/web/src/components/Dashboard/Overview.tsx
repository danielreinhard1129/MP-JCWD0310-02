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

export function Overview({ data }: { data: DataProps[] }) {
  const dataArr = data.map((value) => {
    const objVal: any = {
      name: [value.name],
    };
    value.data.map((val) => {
      objVal[val.name] = val.value;
    });
    return objVal;
  });

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart width={730} height={250} data={dataArr}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#000000" strokeWidth={2} />
        <YAxis stroke="#000000" strokeWidth={2} />
        <Tooltip />
        <Legend />
        {data[0].data.map((val, indx) => {
          return (
            <Line
              type="monotone"
              name={val.title}
              strokeWidth={2}
              dataKey={val.name}
              stroke={color[indx].color}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}
