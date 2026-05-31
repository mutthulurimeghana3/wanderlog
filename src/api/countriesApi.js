import axios from "axios";

export const getCountries = async () => {
  const response = await axios.get(
    "https://restcountries.com/v3.1/all?fields=name,flags,cca3,capital,population,region"
  );

  return response.data;
};