import { Box, Hidden, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import logo from "../../../../imges/logo.svg";
import smallLogo from "../../../../imges/bazaar-black-sm.svg";

import CustomLink from "../../../customLink";
import CartDrawer from "../../../muiDrawer";

const styles = () => ({
  styledMenu: {
    position: "sticky",
    top: 0,
    bgcolor: "white",
    zIndex: 1,
  },
});

function Menubar() {
  const classess = styles();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={classess.styledMenu}
    >
      <Link
        to={{
          pathname: "/",
        }}
      >
        <Box>
          <Hidden smDown>
            <img src={logo} alt="" />
          </Hidden>

          <Hidden smUp>
            <img src={smallLogo} alt="" />
          </Hidden>
        </Box>
      </Link>

      <Box display="flex">
        <Hidden smDown>
          <CustomLink pathName="/">
            <Typography mr={2}>Home</Typography>
          </CustomLink>

          <CustomLink pathName="product-categories">
            <Typography mr={2}>Our Products</Typography>
          </CustomLink>

          <CustomLink pathName="cart">
            <Typography mr={2}>View Cart</Typography>
          </CustomLink>
        </Hidden>
      </Box>

      <Box display="flex" justifyContent="center" alignContent="center">
        <PersonOutlinedIcon sx={{ color: "#7D879C" }} />
        <CartDrawer />
      </Box>
    </Box>
  );
}

export default Menubar;
