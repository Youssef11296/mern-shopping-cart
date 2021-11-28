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

// Get product
export const getProduct = (id: Product["_id"]) => async (dispatch: any) => {
  try {
    const { data } = await api.getProduct(id);
    dispatch({
      type: actionTypes.GET_PRODUCT,
      payload: data.data,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

// TODO: EDIT PRODUCT TO ADD IT TO THE CART

// Edit product
export const addProductToCart =
  (id: Product["_id"]) => async (dispatch: any) => {
    try {
      const { data } = await api.addProductToCart(id);
      console.log({ added: data });
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: data.data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

/* PRIVATE ADMIN ACTIONS */

// Delete product
export const deleteProduct = (id: Product["_id"]) => async (dispatch: any) => {
  try {
    await api.deleteProduct(id);
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      payload: id,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
