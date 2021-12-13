// modules & hooks
import { useSelector } from "react-redux";
import { RootState } from "../../../context";
// components
import ProductItem from "./ProductItem/ProductItem";
// styles
import "../../../styles/HomeStyles/ProductsList.scss";

const ProductsList = () => {
  // selectors
  const products = useSelector((state: RootState) => state.products.products);
  console.log({ products });
  return (
    <div className="productsList">
      {products.map((product: Product, index: number) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
