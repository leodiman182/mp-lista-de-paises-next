import CountryCard from '../CountryCard';

function Items({ currentItems }) {
  return (
    <section className="w-full h-[625px] mt-[40px] grid grid-cols-5">
      {currentItems.map((el, index) => (
        <CountryCard el={el} key={index} />
      ))}
    </section>
  );
}

export default Items;
