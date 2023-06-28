export default function CountryCard({ el }) {
  const {
    name: { common },
    flags: { svg, alt },
    region,
    flag,
    languages,
    population,
    capital,
    maps: { googleMaps },
  } = el;
  console
    .log
    // common,
    // svg,
    // alt,
    // region
    // flag
    // Object.values(languages)
    // population
    // capital
    // googleMaps
    ();
  return (
    <div>
      {el.name.common} {flag}{' '}
    </div>
  );
}
