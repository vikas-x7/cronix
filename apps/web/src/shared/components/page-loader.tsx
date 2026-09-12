import LoadingIndicator from '@/shared/components/loading-indicator';

export default function PageLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-neutral-950">
      <LoadingIndicator />
    </div>
  );
}
