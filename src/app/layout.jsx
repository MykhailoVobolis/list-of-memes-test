import React from 'react';
import NavBar from '@/components/NavBar.jsx';
import Providers from '@/components/Providers.jsx';

import './globals.css';

export const metadata = {
  title: 'Memes',
  description: 'Super description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <NavBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
