import { useBucketList } from "../../context/BucketListContext";

function CountryInfo({ country }) {
  const { addToBucketList, markVisited } =
    useBucketList();

  return (
    <div className="container">
      <img
        src={country.flags.png}
        alt={country.name.common}
        width="400"
      />

      <h1>{country.name.common}</h1>

      <p>
        <strong>Capital:</strong>{" "}
        {country.capital?.[0]}
      </p>

      <p>
        <strong>Region:</strong>{" "}
        {country.region}
      </p>

      <p>
        <strong>Population:</strong>{" "}
        {country.population.toLocaleString()}
      </p>

      <button
        onClick={() => addToBucketList(country)}
      >
        Add To Bucket List
      </button>

      <button
        onClick={() => markVisited(country)}
      >
        Mark Visited
      </button>
    </div>
  );
}

export default CountryInfo;