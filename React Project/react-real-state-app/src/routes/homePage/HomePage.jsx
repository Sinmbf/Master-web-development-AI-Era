import Box from "../../components/box/Box";
import SearchBar from "../../components/searchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="flex min-h-[calc(100vh-96px)] pb-5">
      {/* Text Section */}
      <div className="flex-3 flex flex-col md:justify-center gap-2 w-[50%]">
        <div className="md:pr-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5">
            More Than a House — Find a Place to Belong
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">
            Explore verified properties, connect with trusted agents, and
            discover homes that fit your lifestyle and budget. Sidhaa Makan
            makes modern real estate simple, seamless, and reliable.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar />

        <div className="flex justify-between mt-10">
          <Box desc="Years Of Experience">16+</Box>
          <Box desc="Awards Gained">200</Box>
          <Box desc="Properties Ready">1200+</Box>
        </div>
      </div>

      {/* Video Section */}
      <div className="hidden lg:flex flex-2 bg-[#fcf5f3] items-center">
        {/* <img
          src="/bg.png"
          alt=""
          className="absolute right-0 w-[107%] h-full object-cover"
        /> */}
        <video
          src="/realstate.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        ></video>
      </div>
    </div>
  );
};

export default HomePage;
