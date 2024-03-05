import React, { createContext, useState } from "react";
import useAppCart from "../../hooks/useAppCart";
import { createCart } from "../../utils/api";
import { useMutation } from "react-query";

export const AppCartContext = createContext();

function AppCartProvider({ children }) {
  // const { newProductData, isProductoading, isProductError, productError } =
  //   useAppCart();

  const [cart, setCart] = useState([]);

  const createCartQueryKey = "createCartKey";

  const { data, mutate: addToCartMutation } = useMutation(
    createCartQueryKey,
    createCart
  );

  const addToCart = (newProduct) => {
    const response = addToCartMutation(newProduct);
    // console.log("New Product: ", newProduct);
    // console.log("addToCartMutation: ", data);
  };

  // console.log("NewProductObj", newProduct);
  // console.log("API", newProductData);
  //   const addToCart = (newProduct) => {

  //     const createCartQueryKey = "createCartKey";

  //   const {
  //     data: newProductData,

  //   } = useMutation(createCartQueryKey, createCart(newProduct));

  // };

  // console.log("NewProductData: ", newProductData);
  const contextValue = {
    cart,
    setCart,
    addToCart,
  };

  return (
    <AppCartContext.Provider value={contextValue}>
      {children}
    </AppCartContext.Provider>
  );
}

export default AppCartProvider;
