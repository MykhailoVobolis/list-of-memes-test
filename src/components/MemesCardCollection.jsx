'use client';

import MemeCard from './MemeCard';

export default function MemesCardCollection({ memes }) {
  return (
    <ul className="grid gap-2 grid-cols-2 sm:grid-cols-4 list-none p-0 m-0">
      {memes.map((item) => (
        <li key={item.id}>
          <MemeCard meme={item} />
        </li>
      ))}
    </ul>
  );
}
