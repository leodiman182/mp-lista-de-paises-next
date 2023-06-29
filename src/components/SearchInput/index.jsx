import MainContext from '@/context/MainContext';
import { useContext } from 'react';

export default function SearchInput() {
  const { searchInput, setSearchInput } = useContext(MainContext);

  return (
    <div className="absolute top-[30px]">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        className="px-[20px] py-[6px] rounded-md focus:outline-none focus:ring-0"
        placeholder="Search country"
        type="text"
      />
    </div>
  );
}
