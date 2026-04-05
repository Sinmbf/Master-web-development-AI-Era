import Items from "./components/Items";
import Product from "./components/Product";

export const App = () => {
  const obj = {
    ram: "8GB",
    rom: "128GB",
    processor: "A17 Bionic",
  };
  return (
    <>
      <Product name="iPhone 17" price={70000} color="black" />

      <Product name="iPhone 16" price={65000} color="blue" details={obj} />
      {/* <Items /> */}
    </>
  );
};
