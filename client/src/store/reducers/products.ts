// Action types
import * as actionTypes from "../actions/actionTypes";

// Initial state
const initailState = {
  products: [],
};

// Reducer
const productReducer = (state = initailState, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      console.log({data: action.payload})
      return { ...state, products: action.payload };
    case actionTypes.CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return { ...state };
  }
};

// Export the reducer
export default productReducer;
