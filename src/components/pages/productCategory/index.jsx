import { Box, Grid, Hidden } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import UpperBar from "./upperBar/index";
import SideBar from "./sideBar";
import Products from "./products";
import AppRoutes from "../../../routes";
import ApiLoader from "../../muiLoader";

function ProductCategoryUI({ products, isLoading, isError, error }) {
  if (isLoading) {
    return <ApiLoader loadingTitle="Loading best selling products..." />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <Box p={{ xs: 2, sm: 3 }} bgcolor="#F6F9FC">
      <UpperBar />

      <Grid container my={4} spacing={2}>
        <Hidden mdDown>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
        </Hidden>

        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {products.map((product, index) => {
              const words = product.title.split(" ");
              const shortTitle = words.slice(0, 3).join(" ");

              return (
                <Grid key={index} item xs={12} sm={6} lg={4}>
                  <Link
                    to={{
                      pathname: "/product-details",
                    }}
                    state={{ id: product.id }}
                    component={AppRoutes}
                    style={{ textDecoration: "none" }}
                  >
                    <Products
                      imageUrl={product.image}
                      productTitle={shortTitle}
                      ratingValue={product.rating.rate}
                      productPrice={product.price}
                    />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductCategoryUI;
