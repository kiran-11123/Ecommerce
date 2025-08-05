// app/layout.tsx

"use client"
import './globals.css';
import Navbar from './navbar/page'; // adjust path
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';



import ClientWrapper from './ClientWrapper';
import { RecoilRoot } from 'recoil';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
        <ClientWrapper>{children}</ClientWrapper>
        </RecoilRoot>
      </body>
    </html>
  );
}
