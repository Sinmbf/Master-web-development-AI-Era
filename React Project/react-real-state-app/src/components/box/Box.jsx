const Box = ({ children,desc }) => {
  return (
    <div className="md:pr-19 text-center">
      <h1 className="text-lg md:text-2xl font-bold">{children}</h1>
      <h2 className="text-xs md:text-lg text-gray-600">{desc}</h2>
    </div>
  );
};

export default Box;
