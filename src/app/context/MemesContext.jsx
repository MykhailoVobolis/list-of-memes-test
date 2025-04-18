'use client';

import { createContext, useContext, useState } from 'react';

const MemesContext = createContext();

export const useMemes = () => useContext(MemesContext);

export const MemesProvider = ({ children }) => {
  const [memes, setMemes] = useState([]);

  return (
    <MemesContext.Provider value={{ memes, setMemes }}>
      {children}
    </MemesContext.Provider>
  );
};
