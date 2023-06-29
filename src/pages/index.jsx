/* eslint-disable react-hooks/exhaustive-deps */
import MainContext from '@/context/MainContext';
import { useContext, useEffect } from 'react';
import { fetchCountries } from '@/utils/requests';
import PaginatedItems from '@/components/PaginatedItems';
import Loading from '@/components/Loading';

export default function Home() {
  const { setApi, setData, loading, setLoading } = useContext(MainContext);

  useEffect(() => {
    setLoading(true);
    fetchCountries().then((res) => {
      setApi(res);
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <main className="flex h-[85vh] flex-col items-center justify-center p-[40px] max-w-[1280px] mx-auto rounded-md bg-zinc-900 relative">
      {loading ? <Loading /> : <PaginatedItems itemsPerPage={15} />}
    </main>
  );
}
