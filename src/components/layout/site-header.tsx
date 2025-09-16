'use client';
import * as React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import AddExpenseDialog from '@/components/transactions/add-expense-dialog';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:h-16 sm:px-6 lg:px-8">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1" />
      <AddExpenseDialog>
        <Button>
          <Plus />
          Add Expense
        </Button>
      </AddExpenseDialog>
    </header>
  );
}
