import { useBucketList } from "../../context/BucketListContext";

function BucketList() {
  const { bucketList } = useBucketList();

  return (
    <>
      <h2>Bucket List</h2>

      {bucketList.length === 0 ? (
        <p>No countries added</p>
      ) : (
        bucketList.map((country) => (
          <div key={country.cca3}>
            {country.name.common}
          </div>
        ))
      )}
    </>
  );
}

export default BucketList;