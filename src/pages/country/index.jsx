import Loading from '@/components/Loading';
import SelectedCountry from '@/components/SelectedCountry';
import MainContext from '@/context/MainContext';
import { useContext } from 'react';

export default function CountryPage() {
  const { loading } = useContext(MainContext);

  return (
    <main className="flex h-[85vh] flex-col items-start justify-center p-[50px] max-w-[1024px] mx-auto rounded-md bg-zinc-700 relative">
      {loading ? <Loading /> : <SelectedCountry />}
    </main>
  );
}
