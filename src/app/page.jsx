'use client';

import axios from 'axios';
import { useDisclosure } from '@heroui/react';
import { useEffect, useState } from 'react';
import { useMemes } from './context/MemesContext.jsx';

import EditMemeModal from '@/components/EditMemeModal.jsx';
import MemesTable from '@/components/MemesTable.jsx';

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { memes, setMemes } = useMemes();

  useEffect(() => {
    if (!memes || memes.length === 0) {
      const fetchMemes = async () => {
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
    } else {
      setLoading(false);
    }
  }, [memes, setMemes]);

  const handleEdit = (meme) => {
    setSelectedMeme(meme);
    onOpen();
  };

  const handleSaveMeme = async (updatedMeme, onClose) => {
    try {
      const { data } = await axios.patch('/api/memes/update', updatedMeme);

      setMemes((prevMemes) =>
        prevMemes.map((meme) =>
          meme.id === data.id ? { ...meme, ...data } : meme,
        ),
      );

      onClose();
    } catch (error) {
      console.error('Failed to update meme:', error);
    }
  };

  return (
    <main className="container mx-auto max-w-7xl pt-14 px-6 flex-grow">
      <h1 className="mb-4 text-2xl">Table of memes</h1>
      <MemesTable
        onEdit={handleEdit}
        memes={memes}
        loading={loading}
        error={error}
      />
      {selectedMeme && (
        <EditMemeModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          meme={selectedMeme}
          onSave={handleSaveMeme}
        />
      )}
    </main>
  );
}
