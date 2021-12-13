// Modules & Hooks
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../context";
// Styles
import "../../../styles/HomeStyles/FilteredProduct.scss";

const FilteredProduct = () => {
  // selectors
  const product: Product = useSelector(
    (state: RootState) => state.products.filteredProduct
  );

  console.log({ filtered: product });

  if (!product) return <h1>Loading ...</h1>;

  return (
    <div className="filteredProduct">
      <div className="filteredProduct__container">
        <div className="filteredProduct__image">
          <img src={product?.imageURL} alt={product.name} />
        </div>
        <div className="filteredProduct__right">
          <div className="filteredProduct__info">
            <div className="filteredProduct__name">
              <span>Name:</span>
              {product.name}
            </div>
            <div className="filteredProduct__description">
              <span>Description:</span>
              {product.description}
            </div>
            <div className="filteredProduct__price">
              <span>Price:</span>${product.price}
            </div>
          </div>
          <div className="filteredProduct__options">
            <Link className="btn" to="/">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredProduct;
