import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchProductDetails } from "../../../utils/api";
import ProductDetailsUI from "./../../../components/pages/productDetails/index";

function ProductDetails() {
  const location = useLocation();
  const id = location.state?.id || 1;

  const queryKey = `productDetails-${id}`;

  const {
    data: productDetails,
    isLoading,
    isError,
    error,
  } = useQuery(queryKey, () => fetchProductDetails(id));

  return (
    <ProductDetailsUI
      productDetails={productDetails}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
}

export default ProductDetails;
