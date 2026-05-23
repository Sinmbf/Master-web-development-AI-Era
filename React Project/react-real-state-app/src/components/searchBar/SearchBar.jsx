import { useState } from "react";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  function switchType(type) {
    setQuery((prev) => ({ ...prev, type: type }));
  }
  return (
    <div className="md:pr-5">
      <div className="type">
        {types.map((type) => (
          <button
            className={query.type === type ? "active" : ""}
            key={type}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form
        action=""
        className="flex gap-1 border border-gray-300 flex-col md:flex-row"
      >
        <input
          type="text"
          name="location"
          placeholder="Search for properties..."
          className="searchBarInput searchBarInput-flex"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="searchBarInput searchBarInput-flex"
          min={0}
          max={1000000}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="searchBarInput searchBarInput-flex"
          min={0}
          max={1000000}
        />
        <Link
          to="/list"
          type=""
          className="bg-[#fece51] p-4 cursor-pointer hover:bg-[#ebae11] border-0 flex items-center justify-center"
        >
          <img src="/search.png" alt="" className="w-6 h-6" />
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
