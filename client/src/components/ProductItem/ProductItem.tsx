// Styles
import "./ProductItem.scss";

// Props
interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <div className="productItem">
      <div className="productItem__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="productItem__info">
        <h2 className="productItem__name">{product.name}</h2>
        <p className="productItem__description">{product.description}</p>
        <h3 className="productItem__price">${product.price}</h3>
      </div>
      <div className="productItem__controllers">
        <button>View</button>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
