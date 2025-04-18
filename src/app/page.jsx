import MemesTable from '@/components/MemesTable.jsx';

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <h1 className="mb-4 text-2xl">Table of memes</h1>
      <MemesTable />
    </main>
  );
}
