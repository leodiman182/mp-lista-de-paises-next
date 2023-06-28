/* eslint-disable react-hooks/exhaustive-deps */
import MainContext from '@/context/MainContext';
import { useContext, useEffect } from 'react';
import { fetchCountries } from '@/utils/requests';
import PaginatedItems from '@/components/PaginatedItems';

export default function Home() {
  const { setApi, setData } = useContext(MainContext);

  useEffect(() => {
    fetchCountries().then((res) => {
      setApi(res);
      setData(res);
    });
  }, []);

  return (
    <main className="flex h-[85vh] flex-col items-center justify-center p-[50px] max-w-[1280px] mx-auto rounded-md bg-zinc-900">
      <PaginatedItems itemsPerPage={15} />
    </main>
  );
}
