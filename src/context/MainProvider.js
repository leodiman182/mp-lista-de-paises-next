'use client';

import { useState } from 'react';
import MainContext from './MainContext';

export default function MainProvider({ children }) {
  const [api, setApi] = useState([]);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCountry, setselectedCountry] = useState();
  const [loading, setLoading] = useState(false);

  const [itemOffset, setItemOffset] = useState(0);

  const context = {
    api,
    data,
    setApi,
    loading,
    setData,
    itemOffset,
    setLoading,
    searchInput,
    setSearchInput,
    setItemOffset,
    selectedCountry,
    setselectedCountry,
  };

  return (
    <MainContext.Provider value={context}>{children}</MainContext.Provider>
  );
}
