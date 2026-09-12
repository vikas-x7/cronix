'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TbDeviceLaptop } from 'react-icons/tb';
import LoadingIndicator from '@/shared/components/loading-indicator';
import Sidebar from '@/modules/dashboard/components/sidebar';
import { useAuth } from '@/modules/auth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-950">
        <LoadingIndicator />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return <>{children}</>;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const check = () => setIsLargeScreen(window.innerWidth >= 769);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <ProtectedRoute>
      {isLargeScreen ? (
        <div className="flex h-screen font-geist-sans">
          <div className="w-[210px] shrink-0">
            <Sidebar />
          </div>
          <main className="flex-1 min-h-0 overflow-y-auto">{children}</main>
        </div>
      ) : (
        <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <TbDeviceLaptop size={48} className="text-[#DF5BCC]" />
            <h2 className="text-xl tracking-[-1px] text-white">
              Dashboard is not available on smaller screens
            </h2>
            <p className="text-sm text-white/60">
              Please access from a laptop or desktop browser
            </p>
          </div>
        </div>
      )}
    </ProtectedRoute>
  );
}
