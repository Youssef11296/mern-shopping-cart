// Styles
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/actions/products";
import "./Modal.scss";
// Props
interface Props {
  productId: Product["_id"];
}

const OptionsModal: React.FC<Props> = ({ productId }) => {
  // Dispatcher
  const dispatch = useDispatch();
  // Delete handler
  const deleteHandler = () => {
    dispatch(deleteProduct(productId));
  };
  // Edit handler
  const editHandler = () => {
    console.log("EDIT");
  };

  return (
      <div className="modal">
        <div className="modal__options">
          <button onClick={editHandler}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
  );
};

export default OptionsModal;
