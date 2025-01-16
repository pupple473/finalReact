import axios from "axios";

export async function getAllProducts(limit = 30) {
  return await axios.get(`https://dummyjson.com/products?limit=${limit}`);
}

export async function getAllCategories() {
  return await axios.get("https://dummyjson.com/products/categories");
}

// import axios from "axios";

// export async function getAllProducts(limit = 30) {
//   return await axios.get(`https://dummyjson.com/products?limit=${limit}`);
// }

// export async function getAllCategories() {
//   return await axios.get("https://dummyjson.com/products/categories");
// }

// export async function getProductById(id) {
//   return await axios.get(`https://dummyjson.com/products/${id}`);
// }

// export async function getProductsByCategory(id) {
//   return await axios.get(`https://dummyjson.com/products/category/${id}`);
// }

export async function searchProducts(query) {
 return await axios.get(`https://dummyjson.com/products/search?q=${query}`)
}
