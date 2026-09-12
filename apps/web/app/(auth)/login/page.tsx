import { Suspense } from 'react';
import { LoginContent } from '@/modules/auth';
import LoadingIndicator from '@/shared/components/loading-indicator';

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#0D0D0D]">
          <LoadingIndicator />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
