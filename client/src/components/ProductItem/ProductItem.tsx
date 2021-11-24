// Styles
import "./ProductItem.scss";

// Props
interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <div className="product__item">
      <h1>Product Item!</h1>
    </div>
  );
};

export default ProductItem;
