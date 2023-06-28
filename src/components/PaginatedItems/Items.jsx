import CountryCard from '../CountryCard';

function Items({ currentItems }) {
  return (
    <section className="grid-wrapper">
      {currentItems.map((el, index) => (
        <CountryCard el={el} key={index} />
      ))}
    </section>
  );
}

export default Items;
