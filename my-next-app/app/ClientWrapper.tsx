'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar/page'; // adjust path
import React from 'react';

const HIDE_NAVBAR_ROUTES = ['/', '/signin', '/signup'];

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const shouldHideNavbar = HIDE_NAVBAR_ROUTES.includes(pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
}
