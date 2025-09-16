'use server';

import { categorizeTransaction } from '@/ai/flows/categorize-transactions';
import { z } from 'zod';
import { CATEGORY_VALUES } from './constants';

const CategorizeResultSchema = z.object({
  category: z.enum(CATEGORY_VALUES).optional(),
  error: z.string().optional(),
})

export async function handleCategorize(
  description: string
): Promise<z.infer<typeof CategorizeResultSchema>> {
  try {
    if (!description) {
      return { error: 'Description is required.' };
    }
    const result = await categorizeTransaction({ description });
    return { category: result.category };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to categorize transaction. Please try again.' };
  }
}
