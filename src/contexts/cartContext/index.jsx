import React, { createContext, useEffect, useState } from "react";
import useCartData from "../../hooks/useCartData";

export const CartContext = createContext();

function CartProvider({ children }) {
  const {
    cartData,
    isCartLoading,
    isCartError,
    cartError,
    cartProducts,
    isProductsLoading,
    isProductsError,
    productsError,
    productQuantities,
    totalPrice,
    totalAmount,
  } = useCartData();

  const [cart, setCart] = useState([]);
  const [value, setValue] = useState({
    cart,
    setCart,

    cartData,
    isCartLoading,
    isCartError,
    cartError,

    productQuantities,

    cartProducts,
    isProductsLoading,
    isProductsError,
    productsError,

    totalPrice,
    totalAmount,
  });

  useEffect(() => {
    if (cartProducts) {
      setValue({
        ...value,
        cart: cartProducts,
        isProductsLoading,
        isCartLoading,

        productQuantities,
        totalPrice,
        totalAmount,
      });
    }
  }, [cartProducts]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
