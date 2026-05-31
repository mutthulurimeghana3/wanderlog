import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link
      to={`/country/${country.cca3}`}
      className="country-card"
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
      />

      <h3>{country.name.common}</h3>

      <p>{country.capital?.[0]}</p>

      <p>{country.region}</p>

      <p>
        Population:
        {country.population.toLocaleString()}
      </p>
    </Link>
  );
}

export default CountryCard; 