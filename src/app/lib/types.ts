import type { LucideIcon } from 'lucide-react';

export type TransactionCategory =
  | 'Food'
  | 'Shopping'
  | 'Bills'
  | 'Transportation'
  | 'Entertainment'
  | 'Travel'
  | 'Healthcare'
  | 'Education'
  | 'Other';

export interface CategoryInfo {
  value: TransactionCategory;
  label: string;
  icon: LucideIcon;
}

export interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: TransactionCategory;
}

export type Budgets = Record<TransactionCategory, number>;
