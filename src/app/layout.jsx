import React from 'react';
import Providers from './providers.jsx';
import NavBar from '@/components/NavBar.jsx';

import './globals.css';

export const metadata = {
  title: 'Memes',
  description: 'Super description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
