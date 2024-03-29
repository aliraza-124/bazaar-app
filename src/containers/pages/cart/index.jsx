import React, { Suspense } from "react";
import { useQuery } from "react-query";

import { Box } from "@mui/material";

import ApiLoader from "../../../components/muiLoader";
// import CartUI from "../../../components/pages/cart";
import { fetchCart, fetchCartProducts } from "../../../utils/api";

const CartUI = React.lazy(() => import("../../../components/pages/cart"));

function Cart() {
  const cartQueryKey = "cart";
  const productsQueryKey = "products";

  const {
    data: cartData,
    isLoading: isCartLoading,
    isError: isCartError,
    error: cartError,
  } = useQuery(cartQueryKey, fetchCart);

  let getQuantities = [];
  if (cartData && cartData.products) {
    getQuantities = cartData.products.map((item) => item.quantity);
  }

  const {
    data: cartProducts,
    isLoading: isProductsLoading,
    isError: isProductsError,
    error: productsError,
  } = useQuery(productsQueryKey, () => fetchCartProducts(cartData), {
    enabled: !!cartData,
  });

  if (isCartLoading) return <ApiLoader loadingTitle="Loading cart items..." />;
  if (isCartError)
    return <Box>Error fetching cart data: {cartError.message}</Box>;
  if (isProductsLoading)
    return <ApiLoader loadingTitle="Loading cart items..." />;
  if (isProductsError)
    return <Box>Error fetching products: {productsError.message}</Box>;

  const totalPrice = [];
  let totalAmount = 0;

  cartProducts.map((item, index) => {
    const price = item.price * getQuantities[index];
    totalPrice.push(price);
    totalAmount += price;
    return true;
  });

  return (
    <Suspense fallback={<ApiLoader loadingTitle="Loading cart items..." />}>
      <CartUI
        cartProducts={cartProducts}
        getQuantities={getQuantities}
        totalPrice={totalPrice}
        totalAmount={totalAmount}
      />
    </Suspense>
  );
}

export default Cart;
