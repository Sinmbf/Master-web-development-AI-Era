const Feature = ({ img, title, desc }) => {
  return (
    <div className="flex gap-2 items-center">
      <img src={`/${img}`} alt="" className="featureImg" />
      {/* Feature text */}
      <div className="">
        <span className="text-[12px] md:text-sm font-bold mb-4">{title}</span>
        <p className="text-gray-700 text-[12px] md:text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
