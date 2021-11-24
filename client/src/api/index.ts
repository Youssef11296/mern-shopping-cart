// Axios
import axios from "axios";

// Main url
const url = "http://localhost:5000/api";

// Get all products
export const getAllProducts = () => axios.get(`${url}/products`);
