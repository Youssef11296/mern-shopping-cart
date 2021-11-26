// Styles
import "./CartProduct.scss";

// Props
interface Props {
  product: Product;
}

const CartProduct: React.FC<Props> = ({ product }) => {
  return (
    <div className="cart__product">
      <div className="cart__product__image">
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div>
        <div className="cart__product__info">
          <h3 className="cart__name">{product.name}</h3>
          <p className="cart__description">{product.description}</p>
          <h3 className="product__price">${product.price}</h3>
        </div>
        <div className="cart__product__controllers">
          <button>x</button>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
