import { SiteSidebar } from '@/components/layout/site-sidebar';
import { SiteHeader } from '@/components/layout/site-header';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from '@/components/ui/sidebar';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen">
        <Sidebar>
          <SiteSidebar />
        </Sidebar>
        <SidebarInset>
          <SiteHeader />
          <main className="p-4 sm:p-6 lg:p-8">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
