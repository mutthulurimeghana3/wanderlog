function FilterButtons({ region, setRegion }) {
  const regions = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  return (
    <div className="filter-container">
      {regions.map((item) => (
        <button
          key={item}
          className={
            region === item ? "active-filter" : ""
          }
          onClick={() => setRegion(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;