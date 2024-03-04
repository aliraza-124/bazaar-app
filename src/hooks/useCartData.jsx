import { useQuery } from "react-query";
import { fetchCart, fetchCartProducts } from "../utils/api";

function useCartData() {
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

  return {
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
  };
}
export default useCartData;
