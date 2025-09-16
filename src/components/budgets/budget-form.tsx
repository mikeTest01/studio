'use client';

import * as React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AppContext } from '@/app/context/app-context';
import { CATEGORIES } from '@/app/lib/constants';
import type { Budgets } from '@/app/lib/types';
import { useToast } from '@/hooks/use-toast';

const budgetFormSchema = z.object(
  CATEGORIES.reduce((acc, category) => {
    acc[category.value] = z.coerce
      .number({ invalid_type_error: 'Must be a number.' })
      .min(0, 'Must be non-negative.');
    return acc;
  }, {} as Record<keyof Budgets, z.ZodType>)
);

export default function BudgetForm() {
  const { budgets, setBudgets } = React.useContext(AppContext);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof budgetFormSchema>>({
    resolver: zodResolver(budgetFormSchema),
    defaultValues: budgets,
  });
  
  React.useEffect(() => {
    form.reset(budgets);
  }, [budgets, form]);

  function onSubmit(values: z.infer<typeof budgetFormSchema>) {
    setBudgets(values);
    toast({
        title: "Budgets Updated",
        description: "Your new budget goals have been saved.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-2">
            <h2 className="text-xl font-semibold">Monthly Budgets</h2>
            <p className="text-muted-foreground">Set your spending goals for each category.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <FormField
              key={category.value}
              control={form.control}
              name={category.value}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <category.icon className="h-5 w-5" />
                    {category.label}
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="500.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <Button type="submit">Save Budgets</Button>
        </div>
      </form>
    </Form>
  );
}
