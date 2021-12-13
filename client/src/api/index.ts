// Axios & Config
import axios from "axios";
import { apiUrl } from "../config";

// Main url
const url = apiUrl;

// Get all products
export const getAllProducts = () => axios.get(`${url}/products`);

// Create product
export const createProduct = (productData: Product) =>
  axios.post(`${url}/products/new`, productData);

// Get product
export const getProduct = (id: Product["_id"]) =>
  axios.get(`${url}/products/${id}`);

// Delete product
export const deleteProduct = (id: Product["_id"]) =>
  axios.delete(`${url}/products/${id}`);

// Add to cart
export const addProductToCart = (id: Product["_id"]) =>
  axios.patch(`${url}/products/${id}`, {
    added: true,
    selectedCartAmount: 1,
  });

// Increase cart product amount
export const updateCartProductAmount = (
  productId: Product["_id"],
  amount: number
) =>
  axios.patch(`${url}/cart/products/${productId}`, {
    selectedCartAmount: amount,
  });

// Delete cart product
export const removeCartProduct = (id: Product["_id"]) =>
  axios.patch(`${url}/cart/products/${id}`, {
    added: false,
    selectedCartAmount: 0,
  });

// Get cart products
export const getCartProducts = () => axios.get(`${url}/cart`);
