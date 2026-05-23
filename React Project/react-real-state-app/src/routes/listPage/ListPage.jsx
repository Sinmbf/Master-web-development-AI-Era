import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { listData } from "../../lib/dummyData";

const ListPage = () => {
  const data = listData;

  return (
    <div className="flex flex-1">
      {/* List Container */}
      <div className="flex-3">
        <div className="md:pr-10 h-screen overflow-y-scroll">
          <Filter />
          {/* Card wrapper */}
          <div className="flex flex-col gap-12 px-[.2rem]">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Map Container */}
      <div className="hidden lg:flex flex-2 h-full">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
