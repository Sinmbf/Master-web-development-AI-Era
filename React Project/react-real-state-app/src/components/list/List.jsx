import { listData } from "../../lib/dummyData";
import Card from "../card/Card";

const List = () => {
  return (
    <div className="flex flex-col gap-3">
      {listData.map((data) => (
        <Card key={data.id} item={data} />
      ))}
    </div>
  );
};

export default List;
