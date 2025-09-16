'use client';
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Transaction, Budgets } from '@/app/lib/types';
import { DollarSign, PiggyBank, Target } from 'lucide-react';

interface SummaryCardsProps {
  transactions: Transaction[];
  budgets: Budgets;
}

export default function SummaryCards({
  transactions,
  budgets,
}: SummaryCardsProps) {
  const totalSpent = React.useMemo(
    () => transactions.reduce((sum, t) => sum + t.amount, 0),
    [transactions]
  );
  const totalBudget = React.useMemo(
    () => Object.values(budgets).reduce((sum, b) => sum + b, 0),
    [budgets]
  );
  const remainingBudget = totalBudget - totalSpent;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(totalSpent)}</div>
          <p className="text-xs text-muted-foreground">in current period</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(totalBudget)}</div>
          <p className="text-xs text-muted-foreground">across all categories</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Remaining Budget</CardTitle>
          <PiggyBank className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div
            className={`text-2xl font-bold ${
              remainingBudget < 0 ? 'text-destructive' : ''
            }`}
          >
            {formatCurrency(remainingBudget)}
          </div>
          <p className="text-xs text-muted-foreground">
            {remainingBudget < 0 ? 'Over budget' : 'Left to spend'}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
