import { useContext } from 'react';
import CountryCard from '../CountryCard';
import MainContext from '@/context/MainContext';
import { useRouter } from 'next/router';

function Items({ currentItems }) {
  const { setselectedCountry, setLoading } = useContext(MainContext);
  const router = useRouter();

  return (
    <section className="w-full h-[625px] mt-[40px] grid grid-cols-5 grid-rows-3">
      {currentItems.map((el, index) => (
        <CountryCard
          country={el}
          key={index}
          onClick={() => {
            setLoading(true);
            setselectedCountry(el);
            router.push('country');
            setLoading(false);
          }}
        />
      ))}
    </section>
  );
}

export default Items;
