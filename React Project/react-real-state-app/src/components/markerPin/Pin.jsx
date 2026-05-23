import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        {/* Pop up container */}
        <div className="flex gap-4">
          <div className="">
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-24 object-cover rounded-lg"
            />
          </div>
          {/* Text container */}
          <div className="flex flex-col justify-between">
            <Link to={`/${item.id}`} className="text-sm font-semibold">
              {item.title}
            </Link>
            <span className="text-sm text-gray-500">
              {item.bedroom} bedrooms
            </span>
            <b>${item.price.toFixed(2)}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
