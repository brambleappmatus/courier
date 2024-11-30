'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const data = [
  {
    id: 'C001',
    name: 'John Smith',
    deliveries: 156,
    rating: 4.8,
    onTimeRate: 97.4,
  },
  {
    id: 'C002',
    name: 'Sarah Johnson',
    deliveries: 142,
    rating: 4.9,
    onTimeRate: 98.2,
  },
  {
    id: 'C003',
    name: 'Michael Brown',
    deliveries: 134,
    rating: 4.7,
    onTimeRate: 95.8,
  },
  {
    id: 'C004',
    name: 'Emily Davis',
    deliveries: 128,
    rating: 4.8,
    onTimeRate: 96.5,
  },
];

export function CourierPerformance() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Courier ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Total Deliveries</TableHead>
          <TableHead className="text-right">Average Rating</TableHead>
          <TableHead className="text-right">On-Time Rate (%)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((courier) => (
          <TableRow key={courier.id}>
            <TableCell>{courier.id}</TableCell>
            <TableCell>{courier.name}</TableCell>
            <TableCell className="text-right">{courier.deliveries}</TableCell>
            <TableCell className="text-right">{courier.rating}</TableCell>
            <TableCell className="text-right">{courier.onTimeRate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}