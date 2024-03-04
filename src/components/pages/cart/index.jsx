import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "./customCard";
import CheckoutForm from "./checkoutForm";

function CartUI({ cartProducts, productQuantities, totalPrice, totalAmount }) {
  return (
    <Grid
      container
      px={{ xs: 1.5, sm: 2 }}
      py={{ xs: 2, lg: 3 }}
      spacing={2}
      bgcolor="#F6F9FC"
    >
      <Grid item xs={12} md={7} lg={8}>
        <Grid container spacing={2}>
          {cartProducts &&
            cartProducts?.map((product, index) => {
              const words = product.title.split(" ");
              const shortenedTitle = words.slice(0, 4).join(" ");
              return (
                <Grid item xs={12} key={index}>
                  <CustomCard
                    imageUrl={product?.image}
                    productTitle={shortenedTitle}
                    price={product?.price}
                    quantity={productQuantities?.[index]}
                    totalPrice={totalPrice?.[index]}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <CheckoutForm totalAmount={totalAmount} />
      </Grid>
    </Grid>
  );
}

export default CartUI;
