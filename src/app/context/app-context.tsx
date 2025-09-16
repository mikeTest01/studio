'use client';

import * as React from 'react';
import type { Transaction, Budgets, TransactionCategory } from '@/app/lib/types';
import { CATEGORIES } from '@/app/lib/constants';

interface AppContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
  budgets: Budgets;
  setBudgets: (budgets: Budgets) => void;
}

export const AppContext = React.createContext<AppContextType>({
  transactions: [],
  addTransaction: () => {},
  budgets: {} as Budgets,
  setBudgets: () => {},
});

const initialBudgets: Budgets = CATEGORIES.reduce((acc, category) => {
  let budget = 500;
  if (category.value === 'Travel') budget = 1000;
  if (category.value === 'Shopping') budget = 750;
  if (category.value === 'Food') budget = 600;
  acc[category.value] = budget;
  return acc;
}, {} as Budgets);


const initialTransactions: Transaction[] = [
  { id: '1', date: new Date(2024, 6, 15), description: 'Grocery shopping at Whole Foods', amount: 75.50, category: 'Food' },
  { id: '2', date: new Date(2024, 6, 14), description: 'Monthly electricity bill', amount: 120.00, category: 'Bills' },
  { id: '3', date: new Date(2024, 6, 14), description: 'New shoes from Nike', amount: 150.00, category: 'Shopping' },
  { id: '4', date: new Date(2024, 6, 13), description: 'Gas for the car', amount: 45.00, category: 'Transportation' },
  { id: '5', date: new Date(2024, 6, 12), description: 'Dinner with friends', amount: 60.00, category: 'Food' },
  { id: '6', date: new Date(2024, 6, 11), description: 'Movie tickets for "Dune: Part Two"', amount: 30.00, category: 'Entertainment' },
  { id: '7', date: new Date(2024, 6, 10), description: 'Flight to New York', amount: 350.00, category: 'Travel' },
];

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [transactions, setTransactions] = React.useState<Transaction[]>(initialTransactions);
  const [budgets, setBudgetsState] = React.useState<Budgets>(initialBudgets);

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'date'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: new Date().toISOString() + Math.random(),
      date: new Date(),
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const setBudgets = (newBudgets: Budgets) => {
    setBudgetsState(newBudgets);
  };
  
  const value = {
    transactions,
    addTransaction,
    budgets,
    setBudgets,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
