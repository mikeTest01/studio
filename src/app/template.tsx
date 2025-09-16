import { AppLayout } from '@/components/layout/app-layout';

export default function Template({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
