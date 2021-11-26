import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cart";
import productReducer from "./reducers/products";

const rooReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export const store = createStore(rooReducer, applyMiddleware(compose(thunk)));
export type RootState = ReturnType<typeof store.getState> | any;
