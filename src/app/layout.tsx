import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'nexgencode.in — Software Engineering Partner',
  description: 'We design and build reliable web, mobile, cloud and AI-powered software.',
  icons: { icon: '/favicon-logo.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
