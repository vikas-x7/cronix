'use client';

import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import LoginCard from '@/modules/auth/components/login-card';
import { useAuthStore } from '@/modules/auth';
import { getMe } from '@/modules/auth/api/auth.api';
import LoadingIndicator from '@/shared/components/loading-indicator';

export default function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const error = searchParams.get('error');
  const hasRun = useRef(false);
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);

  useEffect(() => {
    if (!status && !error) return;
    if (hasRun.current) return;
    hasRun.current = true;

    if (error || status !== 'success') {
      clearUser();
      return;
    }

    async function handleCallback() {
      try {
        const user = await getMe();
        setUser(user);
        router.replace('/dashboard');
      } catch {
        clearUser();
      }
    }

    handleCallback();
  }, [status, error, router, setUser, clearUser]);

  if (status === 'success') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0D0D0D]">
        <LoadingIndicator />
      </div>
    );
  }

  return <LoginCard />;
}
