import { useState } from "react";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex(imageIndex == 0 ? images.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex == images.length - 1 ? 0 : imageIndex + 1);
    }
  };
  return (
    <div className="flex gap-4 mb-10 w-full h-87.5 sm:h-100 md:h-auto">
      {/* Full Slider */}
      {imageIndex !== null && (
        <div className="full-slider z-1000">
          {/* Slider Arrow */}
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="" className="" />
          </div>
          {/* Slider Image Container */}
          <div className="flex-10">
            <img
              src={images[imageIndex]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* Slider Arrow */}
          <div
            className="arrow rotate-180"
            onClick={() => changeSlide("right")}
          >
            <img src="/arrow.png" alt="" className="" />
          </div>
          {/* Slider Close */}
          <div className="close">
            <img
              src="/cross.jpg"
              alt=""
              className="absolute top-0 right-0 p-5 cursor-pointer w-25 h-25 object-cover"
              onClick={() => setImageIndex(null)}
            />
          </div>
        </div>
      )}
      {/* Big Image */}
      <div className="flex-3">
        <img
          src={images[0]}
          alt=""
          className="w-full h-full object-cover rounded-lg mb-4 cursor-pointer"
          onClick={() => setImageIndex(0)}
        />
      </div>
      {/* Small Image */}
      <div className="flex-1 flex flex-col justify-between gap-4">
        {images.slice(1).map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-full h-32 object-cover rounded-lg mr-2 cursor-pointer"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
