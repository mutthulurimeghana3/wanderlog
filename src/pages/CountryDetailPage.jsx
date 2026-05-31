import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CountryInfo from "../components/CountryDetail/CountryInfo";

function CountryDetailPage() {
  const { code } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [code]);

  if (!country) return <h2>Loading...</h2>;

  return <CountryInfo country={country} />;
}

export default CountryDetailPage;