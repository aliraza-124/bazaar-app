import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchCart, fetchCartProducts } from "../../utils/api";

export const CartContext = createContext();

function CartProvider({ children }) {
  const cartQueryKey = "cart";
  const productsQueryKey = "cartProducts";

  const {
    data: cartData,
    isLoading: isCartLoading,
    isError: isCartError,
    error: cartError,
  } = useQuery(cartQueryKey, fetchCart);

  const {
    data: cartProducts,
    isLoading: isProductsLoading,
    isError: isProductsError,
    error: productsError,
  } = useQuery(productsQueryKey, () => fetchCartProducts(cartData), {
    enabled: !!cartData,
  });

  let productQuantities = [];
  if (cartData && cartData.products) {
    productQuantities = cartData.products.map((item) => item.quantity);
  }

  const totalPrice = [];
  let totalAmount = 0;

  if (cartProducts) {
    cartProducts.map((item, index) => {
      const price = item.price * productQuantities[index];
      totalPrice.push(price);
      totalAmount += price;
      return true;
    });
  }

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
