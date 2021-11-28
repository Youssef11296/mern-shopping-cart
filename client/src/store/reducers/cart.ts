import * as actionTypes from "../actions/actionTypes";

// Initial state
const initialState = {
  cart: [],
};

/* Reducer */
const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_CART_PRODUCTS:
      console.log({ resdd: action.payload });
      return { ...state, cart: action.payload };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(
          (product: Product) => product._id !== action.payload
        ),
      };
    case actionTypes.REMOVE_CART_PRODUCT:
      console.log({ deleted: action.payload });
      return {
        ...state,
        cart: state.cart.filter(
          (product: Product) => product._id !== action.payload._id
        ),
      };
    case actionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return { ...state };
  }
};

// Export the reducer
export default cartReducer;
