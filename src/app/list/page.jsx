'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useMemes } from '../context/MemesContext.jsx';

import MemesCardCollection from '@/components/MemesCardCollection.jsx';
import ErrorMessage from '@/components/ErrorMessage.jsx';
import Loader from '@/components/Loader.jsx';

export default function ListMemes() {
  const { memes, setMemes } = useMemes();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!memes || memes.length === 0) {
      const fetchMemes = async () => {
        setLoading(true);
        try {
          const { data } = await axios.get('/api/memes/load');
          setMemes(data.memes);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchMemes();
    }
  }, [memes, setMemes]);

  return (
    <main className="container mx-auto max-w-7xl pt-14 px-6 flex-grow">
      <h1 className="mb-4 text-2xl">List of memes</h1>
      {error && <ErrorMessage>Error: {error}</ErrorMessage>}
      {loading ? <Loader /> : <MemesCardCollection memes={memes} />}
    </main>
  );
}
