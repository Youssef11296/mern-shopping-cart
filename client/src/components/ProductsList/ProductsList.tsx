// Modules & Hooks
import { useSelector } from "react-redux";
import { RootState } from "../../store";
// Components
import ProductItem from "../ProductItem/ProductItem";
// Styles
import "./ProductsList.scss";

const ProductsList = () => {
  // selectors
  const products = useSelector((state: RootState) => state.products.products);
  console.log({ products });
  return (
    <div className="products__list">
      {products.map((product, index) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
