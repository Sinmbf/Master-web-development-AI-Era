const Product = ({ name, price, color, details }) => {
  console.log(name, price, color, details);
  return (
    <>
      {name && <h1>{name}</h1>}
      {price && <p>Price: {price}</p>}
      {color && <p>Color: {color}</p>}
      {details && (
        <>
          <p>RAM: {details.ram}</p>
          <p>ROM: {details.rom}</p>
          <p>Processor: {details.processor}</p>
        </>
      )}
    </>
  );
};

export default Product;
