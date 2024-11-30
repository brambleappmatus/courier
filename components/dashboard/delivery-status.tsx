'use client';

import { DeliveryDonutChart } from './charts/donut-chart';

const data = [
  { name: 'Delivered', value: 845 },
  { name: 'In Transit', value: 284 },
  { name: 'Pending', value: 119 },
];

export function DeliveryStatus() {
  return <DeliveryDonutChart data={data} />;
}