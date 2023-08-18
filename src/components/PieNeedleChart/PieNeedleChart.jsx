/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './PieNeedleChart.scss';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 280, color: '#F3ABB0' },
  { name: 'B', value: 90, color: '#E9C499' },
  { name: 'C', value: 70, color: '#ECE1A7' },
  { name: 'D', value: 60, color: '#D1F09E' },
  { name: 'E', value: 50, color: '#89EEA4' },
];
const cx = 150;
const cy = 150;
const iR = 75;
const oR = 150;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 7;
  const x0 = cx + 7;
  const y0 = cy + 7;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

export default function PieNeedleChart ( { score } ) {
  return (
      <div className='pie-needle-chart'>
          <PieChart width={310} height={165}>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx={cx}
                cy={cy}
                innerRadius={iR}
                outerRadius={oR}
                fill="#8884d8"
                stroke="none"
              >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {needle(score - 300, data, cx, cy, iR, oR, '#004B82')}
          </PieChart>
      </div>
  );
}

