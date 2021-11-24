// Action types
import * as actionTypes from "./actionTypes";
import * as api from "../../api";

// Action creators
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
