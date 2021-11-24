// Modules & Hooks
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createProduct } from "../../store/actions/products";
// Styles
import "./AddForm.scss";

const AddForm = () => {
  const { register, handleSubmit } = useForm();

  // Dispatcher
  const dispatch = useDispatch();

  // On submit
  const onSubmit = (data: any) => {
    dispatch(createProduct(data));
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form__inputField">
        <label>Name</label>
        <input type="text" placeholder="ex. Television" {...register("name")} />
      </div>
      <div className="form__inputField">
        <label>Price</label>
        <input type="text" placeholder="ex. 100" {...register("price")} />
      </div>
      <div className="form__inputField">
        <label>Image URL</label>
        <input
          type="text"
          placeholder="ex. product photo link"
          {...register("imageURL")}
        />
      </div>
      <div className="form__inputField">
        <label>Description</label>
        <textarea
          placeholder="ex. This product is one of our best products"
          {...register("description")}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
