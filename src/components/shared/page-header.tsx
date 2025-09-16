import * as React from 'react';

interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div className="flex min-h-12 flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h1>
      {children && <div className="ml-auto flex items-center gap-2">{children}</div>}
    </div>
  );
}
