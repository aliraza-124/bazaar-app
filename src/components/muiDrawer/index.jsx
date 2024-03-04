import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";

import CustomLink from "../customLink";
import DrawerCard from "./drawerCard";
import ApiLoader from "../muiLoader";
import { CartContext } from "../../contexts/cartContext";
import { useState } from "react";

const styles = () => ({
  styledCheckoutButton: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(210, 63, 87)",
    fontWeight: 520,
    borderRadius: "6px",
    textTransform: "none",
    height: "40px",
    fontSize: "14px",
    marginTop: "12px",

    "&:hover": {
      backgroundColor: "#E3364E",
    },
  },

  styledButton: {
    color: "rgb(210, 63, 87)",
    border: "1px solid rgba(210, 63, 87, 0.5)",
    textTransform: "none",
    marginTop: "12px",

    "&:hover": { borderColor: "#D23F57" },
  },
});

export default function RightCartDrawer() {
  const classess = styles();
  const [open, setOpen] = useState(false);

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

  if (isCartLoading) return <ApiLoader loadingTitle="Loading cart items..." />;
  if (isCartError)
    return <Box>Error fetching cart data: {cartError.message}</Box>;
  if (isProductsLoading)
    return <ApiLoader loadingTitle="Loading cart items..." />;
  if (isProductsError)
    return <Box>Error fetching products: {productsError.message}</Box>;

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = (
    <Box p={2} sx={{ width: 350 }} role="presentation">
      <Box
        p={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex">
          <ShoppingBagOutlinedIcon />
          <Typography ml={1}>8 items</Typography>
        </Box>
        <Box>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <Divider />

      <Box mt={1} sx={{ height: "492px", overflowY: "auto" }}>
        <Grid container spacing={1}>
          {cart?.map((product, index) => {
            console.log("Inside map: ", product.title);
            const words = product.title.split(" ");
            const shortenedTitle = words.slice(0, 3).join(" ");
            return (
              <>
                <Grid item xs={12} key={index}>
                  <DrawerCard
                    imageUrl={product?.image}
                    productTitle={shortenedTitle}
                    price={product?.price}
                    quantity={productQuantities?.[index]}
                    totalPrice={totalPrice?.[index]}
                  />
                </Grid>
                <Divider sx={{ width: "100%" }} />
              </>
            );
          })}
        </Grid>
      </Box>

      <Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ ...classess.styledCheckoutButton }}
        >
          Checkout Now (${totalAmount})
        </Button>

        <CustomLink pathName="/cart">
          <Button
            variant="outlined"
            onClick={toggleDrawer(false)}
            fullWidth
            sx={{ ...classess.styledButton }}
          >
            View Cart
          </Button>
        </CustomLink>
      </Box>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ marginLeft: 2, padding: 0 }}
      >
        <ShoppingBagOutlinedIcon sx={{ color: "#7D879C" }} />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
}
