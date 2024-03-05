import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "react-query";

import { fetchProductDetails } from "../../../utils/api";
import ProductDetailsUI from "./../../../components/pages/productDetails/index";
import { CartContext } from "../../../contexts/cartContext";

import { AppCartContext } from "../../../contexts/appCartContext";

function ProductDetails() {
  const location = useLocation();
  const id = location.state?.id || 1;
  const currentDate = new Date().toISOString().split("T")[0];

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
  } = React.useContext(CartContext);

  const { addToCart } = useContext(AppCartContext);

  // Getting specific product by ID.
  const queryKey = `productDetails-${id}`;

  const {
    data: productDetails,
    isLoading,
    isError,
    error,
  } = useQuery(queryKey, () => fetchProductDetails(id));

  // Create an object for new product
  const newProduct = {
    userId: 5,
    date: currentDate,
    products: [
      {
        productId: id,
        quantity: cartData?.products[0]?.quantity,
      },
    ],
  };

  const handleClick = () => {
    addToCart(newProduct);
  };

  return (
    <ProductDetailsUI
      productDetails={productDetails}
      isLoading={isLoading}
      isError={isError}
      error={error}
      handleClick={handleClick}
    />
  );
}

export default ProductDetails;
