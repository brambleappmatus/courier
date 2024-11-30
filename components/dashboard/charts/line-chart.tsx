'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface DeliveryData {
  name: string;
  total: number;
}

interface LineChartProps {
  data: DeliveryData[];
}

export function DeliveryLineChart({ data }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis 
          dataKey="name" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
          stroke="hsl(var(--muted-foreground))" 
        />
        <YAxis 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
          stroke="hsl(var(--muted-foreground))" 
          tickFormatter={(value: number) => `${value}`} 
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="total" 
          strokeWidth={2}
          stroke="hsl(var(--primary))"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}