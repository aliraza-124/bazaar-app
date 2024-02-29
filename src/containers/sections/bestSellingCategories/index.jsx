import React from "react";
import { useQuery } from "react-query";
import { fetchCategories } from "../../../utils/api";
import BestSellingCategoriesUI from "../../../components/sections/bestSellingCategories";

function BestSellingCategories() {
  const queryKey = "categories";

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery(queryKey, fetchCategories);

  return (
    <BestSellingCategoriesUI
      categories={categories}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
}

export default BestSellingCategories;
