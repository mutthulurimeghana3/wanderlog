import BucketList from "../components/BucketList/BucketList";
import VisitedList from "../components/BucketList/VisitedList";

function BucketListPage() {
  return (
    <div className="container">
      <h1>My Travel List</h1>

      <BucketList />

      <VisitedList />
    </div>
  );
}

export default BucketListPage;