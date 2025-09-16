'use client';
import * as React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Transaction, Budgets } from '@/app/lib/types';
import { CATEGORIES } from '@/app/lib/constants';

interface SpendingChartProps {
  transactions: Transaction[];
  budgets: Budgets;
}

export default function SpendingChart({
  transactions,
  budgets,
}: SpendingChartProps) {
  const chartData = React.useMemo(() => {
    return CATEGORIES.map((category) => {
      const spent = transactions
        .filter((t) => t.category === category.value)
        .reduce((sum, t) => sum + t.amount, 0);
      return {
        name: category.label,
        spent: spent,
        budget: budgets[category.value] || 0,
      };
    });
  }, [transactions, budgets]);

  const formatCurrency = (value: number) => `$${value.toFixed(0)}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending vs. Budget</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis tickFormatter={formatCurrency} tickLine={false} axisLine={false} fontSize={12} />
              <Tooltip
                cursor={{ fill: 'hsl(var(--muted))' }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderRadius: 'var(--radius)',
                  border: '1px solid hsl(var(--border))',
                }}
                 formatter={(value: number) => formatCurrency(value)}
              />
              <Legend wrapperStyle={{fontSize: "14px"}}/>
              <Bar dataKey="spent" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} name="Spent" />
              <Bar dataKey="budget" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Budget"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
