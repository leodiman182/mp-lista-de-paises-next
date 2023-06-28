'use client';

import { useState } from 'react';
import MainContext from './MainContext';

export default function MainProvider({ children }) {
  const [api, setApi] = useState([]);
  const [data, setData] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);

  const context = { api, setApi, data, setData, itemOffset, setItemOffset };

  return (
    <MainContext.Provider value={context}>{children}</MainContext.Provider>
  );
}
