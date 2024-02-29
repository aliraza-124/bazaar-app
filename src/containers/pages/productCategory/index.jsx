import React from "react";
import { useQuery } from "react-query";

import { fetchProducts } from "../../../utils/api";
import ProductCategoryUI from "../../../components/pages/productCategory";

function ProductCategory() {
  const queryKey = "products";

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery(queryKey, fetchProducts);

  return (
    <ProductCategoryUI
      products={products}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
}

export default ProductCategory;