import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import ProductsCard from "../../productsCard";
import AppRoutes from "./../../../routes/index";
import ApiLoader from "../../muiLoader";

function BestSellingProductsUI({
  products,
  isLoading,
  isError,
  error,
  isPrime,
}) {
  if (isLoading) {
    return <ApiLoader loadingTitle="Loading best selling products..." />;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <Typography
        textAlign="center"
        color="#2B3445"
        my={5}
        sx={{ fontSize: "25px", fontWeight: 700 }}
      >
        Best Selling Products
      </Typography>

      <Grid container spacing={3} px={3}>
        {products &&
          products
            .filter((product, index) => isPrime(index))
            .slice(0, 4)
            .map((product) => {
              const words = product.title.split(" ");
              const shortenedTitle = words.slice(0, 4).join(" ");
              return (
                <Grid key={product.id} item xs={6} sm={6} md={3}>
                  <Link
                    to={{
                      pathname: "/product-details",
                    }}
                    state={{ id: product.id }}
                    component={AppRoutes}
                    style={{ textDecoration: "none" }}
                  >
                    <ProductsCard
                      imageUrl={product.image}
                      category={product.category}
                      productTitle={shortenedTitle}
                      price={product.price.toString()}
                      rating={product.rating.rate}
                      reviews={product.rating.count}
                    />
                  </Link>
                </Grid>
              );
            })}
      </Grid>
    </>
  );
}

export default BestSellingProductsUI;
