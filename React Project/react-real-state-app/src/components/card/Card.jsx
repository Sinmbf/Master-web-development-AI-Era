import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    // Card Container
    <div className="flex gap-2 mt-5 flex-col md:flex-row">
      {/* Image Container */}
      <Link to={`/${item.id}`} className="flex-2 h-50">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>
      {/* Text Container */}
      <div className="flex-3 flex flex-col justify-between gap-2">
        {/* Title */}
        <h2>
          <Link
            to={`/${item.id}`}
            className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300"
          >
            {item.title}
          </Link>
        </h2>
        {/* Address */}
        <p className="text-gray-600 flex items-center gap-2">
          <img src="/pin.png" alt="" className="listIcons" />
          <span>{item.address}</span>
        </p>
        {/* Price */}
        <p className="text-xl font-bold text-yellow-500 bg-yellow-50 w-max px-2 py-1 rounded">
          ${item.price.toFixed(2)}
        </p>

        {/* Bottom Section */}
        <div className="flex justify-between items-center p-2">
          {/* Features */}
          <div className="flex gap-4">
            <div className="feature">
              <img src="/bed.png" alt="" className="listIcons" />
              <span>{item.bedroom} Bedrooms</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" className="listIcons" />
              <span>{item.bathroom} Bathrooms</span>
            </div>
          </div>
          {/* Icons */}
          <div className="flex gap-2 px-5">
            <div className="icon">
              <img src="/save.png" alt="" className="listIcons" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" className="listIcons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
