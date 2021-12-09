import * as api from "../../api";
import * as actionTypes from "./actionTypes";

/* Action creators */
// Get all cart products
export const getCartProducts = () => async (dispatch: any) => {
  try {
    const { data } = await api.getCartProducts();
    console.log({ res: data.data });
    dispatch({
      type: actionTypes.GET_CART_PRODUCTS,
      payload: data.data,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

// remove cart product
export const removeCartProduct =
  (id: Product["_id"]) => async (dispatch: any) => {
    try {
      const { data } = await api.removeCartProduct(id);
      console.log({ res: data.data });
      dispatch({
        type: actionTypes.REMOVE_CART_PRODUCT,
        payload: data.data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

// Check total cost
export const checkTotalCost = () => {
  return {
    type: actionTypes.CHECK_TOTAL_COST,
  };
};
