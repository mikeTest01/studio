'use client';

import * as React from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { Transaction } from '@/app/lib/types';
import { CATEGORIES } from '@/app/lib/constants';

interface TransactionsTableProps {
  transactions: Transaction[];
}

export default function TransactionsTable({
  transactions,
}: TransactionsTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US').format(date);
  };

  const getCategoryIcon = (category: Transaction['category']) => {
    const Icon = CATEGORIES.find((c) => c.value === category)?.icon;
    return Icon ? <Icon className="h-4 w-4 text-muted-foreground" /> : null;
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  {transaction.description}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge variant="outline" className="flex items-center gap-2 w-fit">
                    {getCategoryIcon(transaction.category)}
                    {transaction.category}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDate(transaction.date)}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(transaction.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
