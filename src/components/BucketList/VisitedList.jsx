import { useBucketList } from "../../context/BucketListContext";

function VisitedList() {
  const { visited } = useBucketList();

  return (
    <>
      <h2>Visited Countries</h2>

      {visited.length === 0 ? (
        <p>No visited countries</p>
      ) : (
        visited.map((country) => (
          <div key={country.cca3}>
            {country.name.common}
          </div>
        ))
      )}
    </>
  );
}

export default VisitedList;