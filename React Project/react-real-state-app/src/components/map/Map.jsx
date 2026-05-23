import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../markerPin/Pin";

const Map = ({ items }) => {
  const position = [52.4797, -1.9025]; // Default center position (can be adjusted)
  // const position = [27.708, 85.247]; // Default center position (can be adjusted)
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="h-full w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
};

export default Map;
