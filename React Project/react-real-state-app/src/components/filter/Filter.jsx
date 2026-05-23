const Filter = () => {
  return (
    <div className="flex flex-col gap-4 mb-5 pl-2">
      {/* heading */}
      <h1 className="text-lg md:text-2xl">
        Search results for <b>London:</b>
      </h1>

      {/* Top Search Section */}
      <div className="w-full">
        <div className="item">
          <label htmlFor="city">Location: </label>
          <input
            type="text"
            id="city"
            placeholder="City Location"
            name="city"
            className="searchBarInput searchBarInput-flex outline outline-gray-300"
          />
        </div>
      </div>
      {/* Bottom Search Section */}
      <div className="flex flex-wrap gap-2 items-center md:justify-between">
        <div className="item">
          <label htmlFor="type">Type: </label>
          <select
            name="type"
            id="type"
            className="searchBarInput searchBarInput-fixed"
          >
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="property">Property: </label>
          <select
            name="property"
            id="property"
            className="searchBarInput searchBarInput-fixed"
          >
            <option value="">Any</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Min Price: </label>
          <input
            type="number"
            id="minPrice"
            placeholder="any"
            name="minPrice"
            className="searchBarInput searchBarInput-fixed"
          />
        </div>

        <div className="item">
          <label htmlFor="maxPrice">Max Price: </label>
          <input
            type="number"
            id="maxPrice"
            placeholder="any"
            name="maxPrice"
            className="searchBarInput searchBarInput-fixed"
          />
        </div>

        <div className="item">
          <label htmlFor="bedroom">Bedrooms: </label>
          <input
            type="number"
            id="bedroom"
            placeholder="Any"
            name="bedroom"
            className="searchBarInput searchBarInput-fixed"
          />
        </div>

        <button className="w-25 p-3 bg-[#fece51] cursor-pointer hover:bg-[#ebae11] border-0 flex self-end justify-center flex-1">
          <img src="/search.png" alt="" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
