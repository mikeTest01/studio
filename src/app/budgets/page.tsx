'use client';

import * as React from 'react';
import PageHeader from '@/components/shared/page-header';
import BudgetForm from '@/components/budgets/budget-form';
import { Card, CardContent } from '@/components/ui/card';

export default function BudgetsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Budgets" />
      <Card>
        <CardContent className="pt-6">
          <BudgetForm />
        </CardContent>
      </Card>
    </div>
  );
}
