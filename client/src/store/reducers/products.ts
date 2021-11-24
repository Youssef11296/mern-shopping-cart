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
      return { ...state, product: action.payload };
    default:
      return { ...state };
  }
};

// Export the reducer
export default productReducer;
