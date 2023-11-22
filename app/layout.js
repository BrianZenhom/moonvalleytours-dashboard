import { Montserrat } from 'next/font/google';

import './ui/globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'MoonValleyTours Admin Panel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
