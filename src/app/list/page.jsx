'use client';

import { useMemes } from '../context/MemesContext.jsx';

export default function ListMemes() {
  const { memes, setMemes } = useMemes();

  return (
    <main className="container mx-auto max-w-7xl pt-14 px-6 flex-grow">
      <h1 className="mb-4 text-2xl">List of memes</h1>
    </main>
  );
}
