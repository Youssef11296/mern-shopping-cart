import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/products";

const rooReducer = combineReducers({
  products: productReducer,
});

export const store = createStore(rooReducer, applyMiddleware(compose(thunk)));
export type RootState = ReturnType<typeof store.getState>;
