import MainContext from '@/context/MainContext';
import Image from 'next/image';
import { useContext } from 'react';

export default function CountryCard({ el }) {
  const { selectedCountry, setSelectedCountry } = useContext(MainContext);
  const {
    name: { common },
    flags: { svg, alt, png },
    region,
    flag,
    languages,
    population,
    capital,
    maps: { googleMaps },
  } = el;

  const imgSrc = svg ? svg : png;

  console.log(imgSrc);

  return (
    <div className="text-white m-[8px] bg-zinc-500 rounded-md p-[10px] pt-[14px] opacity-70 text-center hover:scale-[103%] hover:shadow-md hover:opacity-100 hover:cursor-pointer duration-150 flex flex-col items-center justify-between">
      <h3 className="title text-[22px] w-full truncate pb-[8px]">
        {el.name.common}
      </h3>
      <Image
        className="object-cover h-[115px] rounded-md"
        width={999}
        height={999}
        src={imgSrc}
        alt={alt}
      />
    </div>
  );
}
