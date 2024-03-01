import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import CustomLink from "../customLink";
import DrawerCard from "./drawerCard";

import imgURL from "../../imges/glasses-1.webp";

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

export default function RightTemporaryDrawer() {
  const classess = styles();
  const [open, setOpen] = React.useState(false);

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

      <Box mt={1} sx={{ height: "442px", overflowY: "auto" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <DrawerCard
              imageUrl={imgURL}
              productTitle={"Hello world"}
              price={150.0}
              quantity={4}
              totalPrice={600.0}
            />
          </Grid>

          <Divider sx={{ width: "100%" }} />

          <Grid item xs={12}>
            <DrawerCard
              imageUrl={imgURL}
              productTitle={"Hello world"}
              price={150.0}
              quantity={4}
              totalPrice={600.0}
            />
          </Grid>

          <Divider sx={{ width: "100%" }} />

          <Grid item xs={12}>
            <DrawerCard
              imageUrl={imgURL}
              productTitle={"Hello world"}
              price={150.0}
              quantity={4}
              totalPrice={600.0}
            />
          </Grid>

          <Divider sx={{ width: "100%" }} />

          <Grid item xs={12}>
            <DrawerCard
              imageUrl={imgURL}
              productTitle={"Hello world"}
              price={150.0}
              quantity={4}
              totalPrice={600.0}
            />
          </Grid>

          <Divider sx={{ width: "100%" }} />

          <Grid item xs={12}>
            <DrawerCard
              imageUrl={imgURL}
              productTitle={"Hello world"}
              price={150.0}
              quantity={4}
              totalPrice={600.0}
            />
          </Grid>

          <Divider sx={{ width: "100%" }} />
        </Grid>
      </Box>

      <Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ ...classess.styledCheckoutButton }}
        >
          Checkout Now ($280.00)
        </Button>

        {/* <DialogBox /> */}

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
