import React from "react";
import { Grid, Typography } from "@mui/material";

import CategoriesCard from "../../catogriesCard";
import ApiLoader from "./../../muiLoader/index";

import CategoryImage1 from "../../../imges/category-img-1.webp";
import CategoryImage2 from "../../../imges/category-img-2.webp";
import CategoryImage3 from "../../../imges/category-img-3.webp";

function BestSellingCategoriesUI({ categories, isLoading, isError, error }) {
  if (isLoading) {
    return <ApiLoader loadingTitle="Loading best selling categories..." />;
  }
  if (isError) {
    return <h4>{error.message}</h4>;
  }

  return (
    <>
      <Typography
        textAlign="center"
        color="#2B3445"
        my={5}
        sx={{ fontSize: "25px", fontWeight: 700 }}
      >
        Best selling Categories
      </Typography>

      <Grid container spacing={3} px={3}>
        <Grid item xs={12} sm={6} md={3}>
          <CategoriesCard imageUrl={CategoryImage1} btnTitle={categories[2]} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CategoriesCard imageUrl={CategoryImage2} btnTitle={categories[3]} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CategoriesCard imageUrl={CategoryImage3} btnTitle={categories[1]} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CategoriesCard imageUrl={CategoryImage2} btnTitle={categories[0]} />
        </Grid>
      </Grid>
    </>
  );
}

export default BestSellingCategoriesUI;
