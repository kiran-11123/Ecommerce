import "./globals.css";
import ClientLayout from './ClientLayout';

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}