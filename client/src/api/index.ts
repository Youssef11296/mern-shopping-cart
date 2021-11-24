// Axios
import axios from "axios";

// Main url
const url = "http://localhost:5000/api";

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
