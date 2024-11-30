'use client';

import { DeliveryLineChart } from './charts/line-chart';

const data = [
  { name: 'Jan', total: 167 },
  { name: 'Feb', total: 145 },
  { name: 'Mar', total: 189 },
  { name: 'Apr', total: 201 },
  { name: 'May', total: 178 },
  { name: 'Jun', total: 239 },
  { name: 'Jul', total: 242 },
];

export function Overview() {
  return <DeliveryLineChart data={data} />;
}