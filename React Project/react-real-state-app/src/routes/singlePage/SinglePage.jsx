import Feature from "../../components/features/Feature";
import Map from "../../components/map/Map";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummyData";

const SinglePage = () => {
  return (
    // Container
    <div className="flex gap-4 h-full w-full md:overflow-y-scroll scrollbar-none flex-col lg:flex-row">
      {/* Details */}
      <div className="flex:2 lg:flex-3 h-max">
        {/* Wrapper */}
        <div className="lg:pr-10">
          <Slider images={singlePostData.images} />

          {/* Information Section */}
          <div className="">
            {/* Top Section */}
            <div className="flex justify-between mb-6">
              {/* Post */}
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold mb-4">
                  {singlePostData.title}
                </h1>
                {/* Address */}
                <div className="text-gray-600 flex items-center gap-1">
                  <img src="/pin.png" alt="" className="w-5 h-5" />
                  <span>{singlePostData.address}</span>
                </div>
                {/* Price */}
                <div className="text-xl font-bold text-yellow-500 bg-yellow-50 w-max px-2 py-1 rounded">
                  ${singlePostData.price}
                </div>
              </div>
              {/* User details */}
              <div className="flex flex-col items-center justify-center gap-3 bg-[#fece51] px-2 md:px-10 rounded-lg">
                <img
                  src={userData.img}
                  alt={userData.name}
                  className="w-15 h-15 rounded-full md:mr-2 object-cover"
                />
                <span className="font-semibold text-center">
                  {userData.name}
                </span>
              </div>
            </div>
            {/* Bottom Section */}
            <div className="text-gray-700 leading-relaxed">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="lg:flex-2 bg-[#fcf5f3] h-max p-5">
        {/* Wrapper */}
        <div className="px-1 flex flex-col gap-4">
          {/* Title */}
          <p className="text-lg font-bold">General</p>
          {/* List Vertical */}
          <div className="bg-white p-5 rounded flex flex-col gap-4">
            {/* Single Feature */}
            <Feature
              img="utility.png"
              title="Utilities"
              desc="Renter is responsible"
            />
            {/* Single Feature */}
            <Feature img="pet.png" title="Pet Policy" desc="Pets allowed" />
            {/* Single Feature */}
            <Feature
              img="fee.png"
              title="Property Fees"
              desc="Must have 3x the rent in total household income"
            />
          </div>

          {/* Sizes */}
          <p className="text-lg font-bold">Sizes</p>
          <div className="horizontalFeature bg-white p-5 rounded flex-col md:flex-row">
            {/* Single size */}
            <div className="horizontalFeature">
              <img src="/size.png" alt="" className="featureImg" />
              <span>80 sqft</span>
            </div>
            {/* Single size */}
            <div className="horizontalFeature">
              <img src="/bed.png" alt="" className="featureImg" />
              <span>2 beds</span>
            </div>
            {/* Single size */}
            <div className="horizontalFeature">
              <img src="/bath.png" alt="" className="featureImg" />
              <span>1 bathroom</span>
            </div>
          </div>

          {/* Places */}
          <p className="text-lg font-bold">Places</p>
          {/* List Horizontal */}
          <div className="horizontalFeature bg-white p-5 rounded flex-col sm:flex-row">
            {/* Single Place */}
            <Feature img="school.png" title="School" desc="250m away" />
            {/* Single Place */}
            <Feature img="bus.png" title="Bus Stop" desc="100m away" />
            {/* Single Place */}
            <Feature img="restaurant.png" title="Restaurant" desc="200m away" />
          </div>

          {/* Location */}
          <p className="text-lg font-bold">Location</p>
          {/* Map container */}
          <div className="h-80 lg:h-50 w-full bg-red-1">
            <Map items={[singlePostData]} />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-2">
            <button className="featureBtn">
              <img src="/chat.png" alt="" className="featureImg" />
              Send a message
            </button>
            <button className="featureBtn">
              <img src="/save.png" alt="" className="featureImg" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
