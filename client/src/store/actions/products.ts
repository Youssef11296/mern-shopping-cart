// Action types
import * as actionTypes from "./actionTypes";
import * as api from "../../api";

/* Action creators */
// Get all products
export const getAllProducts = () => async (dispatch: any) => {
  try {
    const { data } = await api.getAllProducts();
    dispatch({
      type: actionTypes.GET_ALL_PRODUCTS,
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Create product
export const createProduct =
  (productData: Product) => async (dispatch: any) => {
    try {
      const { data } = await api.createProduct(productData);
      dispatch({
        type: actionTypes.CREATE_PRODUCT,
        payload: data.data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
