'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface DeliveryStatus {
  name: string;
  value: number;
}

interface DonutChartProps {
  data: DeliveryStatus[];
}

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];

export function DeliveryDonutChart({ data }: DonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]} 
            />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}