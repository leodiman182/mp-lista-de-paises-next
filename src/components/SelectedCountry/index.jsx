import MainContext from '@/context/MainContext';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import BackButton from '../BackButton';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import Link from 'next/link';
import { Tooltip } from '@mui/material';
import { numberWithCommas } from '@/utils/formats';

export default function SelectedCountry() {
  const { selectedCountry, api } = useContext(MainContext);

  console.log(selectedCountry);

  useEffect(() => {
    if (!selectedCountry) {
      redirect('/error');
    }
  }, []);

  const {
    name: { common },
    flags: { svg, alt, png },
    region,
    flag,
    languages,
    population,
    capital,
    cioc,
    borders,
    maps: { googleMaps },
  } = selectedCountry;

  const langArray = Object.entries(languages);

  const imgSrc = svg ? svg : png;

  // function neighborCountries() {
  //   // const neighbors = borders.map((border) => {
  //   //   api.find((country) =>
  //   //     console.log(country.cioc || country.cca2 || country.cc3 || country.ccn3)
  //   //   );
  //   // });
  // }

  return (
    <>
      <div className="absolute top-[15px] left-[15px]">
        <BackButton />
      </div>
      <section className="h-full flex flex-row mb-[30px] w-full">
        <article className="w-1/2">
          <h2 className="title text-[48px] font-bold text-primary-green">
            {common}
          </h2>
          <Image
            className="w-[350px] my-[10px] rounded-md"
            width={999}
            height={999}
            src={imgSrc}
            alt={alt}
          />
          <p className="text-white">
            Capital:{' '}
            <span className="title text-[36px] text-primary-blue">
              {capital}
            </span>
          </p>
        </article>
        <aside className="w-1/2 flex flex-col items-start p-[80px]">
          <Tooltip title={`Where is ${flag} located?`} arrow>
            <Link
              className="inline-block"
              href={googleMaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationCrosshairs
                className="text-primary-blue hover:scale-[105%] hover:text-primary-green duration-150"
                size={30}
              />
            </Link>
          </Tooltip>
          <p className="my-[30px] bg-primary-green px-[14px] shadow-md rounded-full text-[20px] text-zinc-700 hover:cursor-default opacity-80 hover:opacity-100 duration-150">
            {region}
          </p>
        </aside>
      </section>
      <section className="h-full w-full rounded-md bg-zinc-500 p-[20px] text-start">
        <p className="text-white">
          Population:{' '}
          <span className="text-[28px] text-primary-blue title">
            {numberWithCommas(population)}
          </span>
        </p>
        <p className="text-white">
          Languages:{' '}
          <span className="text-[28px] text-primary-blue title">
            {langArray.map((lang, index) => {
              if (index + 1 === langArray.length) {
                return lang[1] + '.';
              } else {
                return lang[1] + ', ';
              }
            })}
          </span>
        </p>
        {borders ? (
          <div>
            <p className="text-white">
              Borders:{' '}
              <span className="text-[28px] text-primary-blue title">
                {borders.map((border, index) => {
                  if (index + 1 === borders.length) {
                    return border + '.';
                  } else {
                    return border + ', ';
                  }
                })}
              </span>
            </p>
          </div>
        ) : (
          <h2 className="text-[28px] text-primary-green title">
            No borders registered...
          </h2>
        )}
      </section>
    </>
  );
}
