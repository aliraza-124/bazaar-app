import axios from "axios";

// export const PRODUCTS_ENDPOINT = "https://fakestoreapi.com/products";
// export const CATEGORIES_ENDPOINT = "https://fakestoreapi.com/products/categories";
// export const PRODUCT_DETAILS_ENDPOINT = `https://fakestoreapi.com/products/${id}`;
// export const CART_ENDPOINT = "https://fakestoreapi.com/carts/5";
// export const CART_PRODUCTS_ENDPOINT = `https://fakestoreapi.com/products/${item.productId}`;

export const fetchCategories = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data;
};

export const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const fetchProductDetails = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

export const fetchCart = async () => {
  const response = await axios.get("https://fakestoreapi.com/carts/5");
  return response.data;
};

export const fetchCartProducts = async (cartData) => {
  const promises = cartData.products.map(async (item) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${item.productId}`
    );
    return response.data;
  });

  return await Promise.all(promises);
};
