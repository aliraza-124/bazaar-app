import React from "react";
import { useQuery } from "react-query";

import { fetchProducts } from "../../../utils/api";
import BestSellingProductsUI from "../../../components/sections/bestSellingProducts";

function BestSellingProducts() {
  const queryKey = "products";

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery(queryKey, fetchProducts);

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  return (
    <>
      <BestSellingProductsUI
        products={products}
        isLoading={isLoading}
        isError={isError}
        error={error}
        isPrime={isPrime}
      />
    </>
  );
}

export default BestSellingProducts;
