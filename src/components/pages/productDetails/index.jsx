import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import RightArea from "./rightArea";
import ApiLoader from "../../muiLoader";
import { useQuery } from "react-query";
import { createCart, fetchCart } from "../../../utils/api";

function ProductDetailsUI({ productDetails, isLoading, isError, error, handleClick }) {
  // const createCartQueryKey = "createCartKey";

  // const {
  //   data: cartData,
  //   isLoading: isCartLoading,
  //   isError: isCartError,
  //   error: cartError,
  // } = useQuery(createCartQueryKey, () => createCart(newProduct));

  if (isLoading) {
    return <ApiLoader loadingTitle="Loading product details..." />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <Grid container bgcolor="#F6F9FC" py={5}>
      <Grid
        item
        xs={12}
        md={6}
        px={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={productDetails.image}
          alt=""
          style={{
            mixBlendMode: "multiply",
            objectFit: "fill",
            maxHeight: "350px",
          }}
        />
      </Grid>

      <Grid item xs={12} md={6} ml={{ xs: 2, md: 0 }}>
        <RightArea
          productTitle={productDetails.title}
          category={productDetails.category}
          rate={productDetails.rating.rate}
          count={productDetails.rating.count}
          price={productDetails.price}
          handleClick={handleClick}
        />
      </Grid>
    </Grid>
  );
}

export default ProductDetailsUI;
