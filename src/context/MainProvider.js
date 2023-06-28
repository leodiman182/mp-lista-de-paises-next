'use client';

import { useState } from 'react';
import MainContext from './MainContext';

export default function MainProvider({ children }) {
  const [countryList, setCountryList] = useState([]);

  const context = { countryList, setCountryList };

  return (
    <MainContext.Provider value={context}>{children}</MainContext.Provider>
  );
}
