'use client';

import { MemesProvider } from '@/app/context/MemesContext.jsx';
import { HeroUIProvider } from '@heroui/react';

export default function Providers({ children }) {
  return (
    <HeroUIProvider>
      <MemesProvider>{children}</MemesProvider>
    </HeroUIProvider>
  );
}
