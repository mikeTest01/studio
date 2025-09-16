'use client';

import * as React from 'react';
import { AppContext } from '@/app/context/app-context';
import SummaryCards from '@/components/dashboard/summary-cards';
import SpendingChart from '@/components/dashboard/spending-chart';
import RecentTransactions from '@/components/dashboard/recent-transactions';
import PageHeader from '@/components/shared/page-header';

export default function DashboardPage() {
  const { transactions, budgets } = React.useContext(AppContext);

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Dashboard" />
      <SummaryCards transactions={transactions} budgets={budgets} />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <SpendingChart transactions={transactions} budgets={budgets} />
        <RecentTransactions transactions={transactions} />
      </div>
    </div>
  );
}
