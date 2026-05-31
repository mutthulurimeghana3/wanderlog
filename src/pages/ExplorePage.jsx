import { useEffect, useState } from "react";
import { getCountries } from "../api/countriesApi";
import CountryCard from "../components/Explore/CountryCard";
import SearchBar from "../components/Explore/SearchBar";

function ExplorePage() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    fetchData();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Explore Countries</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="country-grid">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;