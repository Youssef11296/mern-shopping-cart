// Action types
import * as actionTypes from "../actions/actionTypes";

// Initial state
const initailState = {
  products: [],
  filteredProduct: null,
};

// Reducer
const productReducer = (state = initailState, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      console.log({ data: action.payload });
      return { ...state, products: action.payload };

    case actionTypes.GET_PRODUCT:
      console.log({ product: action.payload });
      return { ...state, filteredProduct: action.payload };

    /* PRIVATE FOR ADMINS */

    case actionTypes.CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    // case actionTypes.EDIT_PRODUCT:
    //   console.log({ res: action.payload });
    //   return {
    //     ...state,
    //     cart: action.payload.success
    //       ? [...state.cart, action.payload]
    //       : state.cart,
    //   };

    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product: Product) => product._id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};

// Export the reducer
export default productReducer;
