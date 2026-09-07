import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { dmSans, urbanist } from '@/shared/fonts';
import QueryProvider from '@/lib/react-query/query-provider';
import { ToastProvider } from '@/shared/lib/toast';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cronix',
  description: 'Cron job & event automation platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${urbanist.variable} ${GeistSans.variable} antialiased`}
      >
        <QueryProvider>
          <ToastProvider>{children}</ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
