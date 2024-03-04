import React, { useContext } from "react";

import { Box } from "@mui/material";

import ApiLoader from "../../../components/muiLoader";
import CartUI from "../../../components/pages/cart";
import { CartContext } from "../../../contexts/cartContext";

function Cart() {
  const {
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
  } = useContext(CartContext);

  if (isCartLoading) return <ApiLoader loadingTitle="Loading cart items..." />;
  if (isCartError)
    return <Box>Error fetching cart data: {cartError.message}</Box>;
  if (isProductsLoading)
    return <ApiLoader loadingTitle="Loading cart items..." />;
  if (isProductsError)
    return <Box>Error fetching products: {productsError.message}</Box>;

  return (
    <>
      {cart && cart.length > 0 && (
        <CartUI
          cartProducts={cart}
          productQuantities={productQuantities}
          totalPrice={totalPrice}
          totalAmount={totalAmount}
        />
      )}
    </>
  );
}

export default Cart;
