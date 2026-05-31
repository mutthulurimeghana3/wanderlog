import { createContext, useContext, useEffect, useState } from "react";

const BucketListContext = createContext();

export const BucketListProvider = ({ children }) => {
  const [bucketList, setBucketList] = useState(() => {
    const saved = localStorage.getItem("bucketList");
    return saved ? JSON.parse(saved) : [];
  });

  const [visitedCountries, setVisitedCountries] = useState(() => {
    const saved = localStorage.getItem("visitedCountries");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "bucketList",
      JSON.stringify(bucketList)
    );
  }, [bucketList]);

  useEffect(() => {
    localStorage.setItem(
      "visitedCountries",
      JSON.stringify(visitedCountries)
    );
  }, [visitedCountries]);

  const addToBucketList = (country) => {
    const exists = bucketList.some(
      (item) => item.cca3 === country.cca3
    );

    if (!exists) {
      setBucketList([...bucketList, country]);
    }
  };

  const removeFromBucketList = (code) => {
    setBucketList(
      bucketList.filter(
        (country) => country.cca3 !== code
      )
    );
  };

  const markVisited = (country) => {
    const exists = visitedCountries.some(
      (item) => item.cca3 === country.cca3
    );

    if (!exists) {
      setVisitedCountries([
        ...visitedCountries,
        country,
      ]);
    }
  };

  const removeVisited = (code) => {
    setVisitedCountries(
      visitedCountries.filter(
        (country) => country.cca3 !== code
      )
    );
  };

  return (
    <BucketListContext.Provider
      value={{
        bucketList,
        visitedCountries,
        addToBucketList,
        removeFromBucketList,
        markVisited,
        removeVisited,
      }}
    >
      {children}
    </BucketListContext.Provider>
  );
};

export const useBucketList = () =>
  useContext(BucketListContext);