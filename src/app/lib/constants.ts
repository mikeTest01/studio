import {
  UtensilsCrossed,
  ShoppingCart,
  Receipt,
  Car,
  Film,
  Plane,
  HeartPulse,
  BookOpen,
  MoreHorizontal,
} from 'lucide-react';
import type { CategoryInfo, TransactionCategory } from './types';

export const CATEGORIES: CategoryInfo[] = [
  { value: 'Food', label: 'Food', icon: UtensilsCrossed },
  { value: 'Shopping', label: 'Shopping', icon: ShoppingCart },
  { value: 'Bills', label: 'Bills', icon: Receipt },
  { value: 'Transportation', label: 'Transportation', icon: Car },
  { value: 'Entertainment', label: 'Entertainment', icon: Film },
  { value: 'Travel', label: 'Travel', icon: Plane },
  { value: 'Healthcare', label: 'Healthcare', icon: HeartPulse },
  { value: 'Education', label: 'Education', icon: BookOpen },
  { value: 'Other', label: 'Other', icon: MoreHorizontal },
];

export const CATEGORY_VALUES = CATEGORIES.map(c => c.value) as [TransactionCategory, ...TransactionCategory[]];
