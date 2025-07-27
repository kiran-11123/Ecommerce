// app/layout.tsx
import './globals.css';
import Navbar from './navbar/page'; // adjust path
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

// ✅ Wrap layout with Client component because usePathname is client-only
import ClientWrapper from './ClientWrapper';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
