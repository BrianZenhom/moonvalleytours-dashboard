'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import styles from './chart.module.css';

const data = [
  {
    name: 'Jan',
    visit: 1490,
    click: 900,
  },
  {
    name: 'Feb',
    visit: 2130,
    click: 1300,
  },
  {
    name: 'Mar',
    visit: 2490,
    click: 1900,
  },
  {
    name: 'Apr',
    visit: 2610,
    click: 2300,
  },
  {
    name: 'May',
    visit: 3050,
    click: 2300,
  },
  {
    name: 'Jun',
    visit: 3490,
    click: 2600,
  },
  {
    name: 'Jul',
    visit: 3490,
    click: 2400,
  },
  {
    name: 'Aug',
    visit: 2190,
    click: 2150,
  },
  {
    name: 'Sep',
    visit: 1490,
    click: 980,
  },
  {
    name: 'Oct',
    visit: 2290,
    click: 1700,
  },
  {
    name: 'Nov',
    visit: 2590,
    click: 2300,
  },
  {
    name: 'Dec',
    visit: 3490,
    click: 2700,
  },
];

export default function Chart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Monthly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={300}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              background: '#091424',
              border: 'none',
              borderRadius: '5px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
