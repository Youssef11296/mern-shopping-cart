// Modules & Hooks
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart, getProduct } from "../../store/actions/products";
import { useState } from "react";
import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

// Components
import Modal from "../Modal/Modal";

// Styles
import "./ProductItem.scss";

// Props
interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  // Dispatcher
  const dispatch = useDispatch();

  // View handler
  const viewHandler = (id: Product["_id"]) => {
    dispatch(getProduct(id));
  };

  // States
  const [openModal, setOpenModal] = useState(false);

  // Toggle options modal
  const toggleModal = () => setOpenModal((ps) => !ps);

  // Add to cart
  const addToCart = () => {
    dispatch(addProductToCart(product._id));
  };

  return (
    <div className="productItem">
      {openModal && <div className="overlay" onClick={toggleModal}></div>}
      <div className="productItem__admin__options" onClick={toggleModal}>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>

      <div className="productItem__image">
        <img src={product.imageURL} alt={product.name} />
      </div>

      <div className="productItem__info">
        <h2 className="productItem__name">{product.name}</h2>
        <p className="productItem__description">
          {product.description.slice(0, 150)}...
        </p>
        <h3 className="productItem__price">${product.price}</h3>
      </div>
      <div className="productItem__controllers">
        <Link
          to={`/products/${product._id}`}
          className="btn"
          onClick={() => viewHandler(product._id)}
        >
          View
        </Link>
        <button
          onClick={addToCart}
          disabled={product.added}
          style={{
            background: product.added ? "#ddd" : "#000",
            color: product.added ? "#000" : "#fff",
            opacity: 0.8,
          }}
        >
          Add To Cart
        </button>
      </div>

      {openModal ? <Modal productId={product._id} /> : null}
    </div>
  );
};

export default ProductItem;
