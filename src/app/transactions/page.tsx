'use client';
import * as React from 'react';
import PageHeader from '@/components/shared/page-header';
import TransactionsTable from '@/components/transactions/transactions-table';
import AddExpenseDialog from '@/components/transactions/add-expense-dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { AppContext } from '@/app/context/app-context';

export default function TransactionsPage() {
  const { transactions } = React.useContext(AppContext);

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Transactions">
        <AddExpenseDialog>
          <Button>
            <Plus />
            Add Expense
          </Button>
        </AddExpenseDialog>
      </PageHeader>
      <TransactionsTable transactions={transactions} />
    </div>
  );
}
