import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";

import CustomButton from "../customButton";

const styles = () => ({
  styledButton: {
    textTransform: "none",
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(210, 63, 87)",
    padding: "0 24px",
    marginBottom: "24px",
    height: "40px",

    "&:hover": {
      backgroundColor: "#E3364E",
    },
  },
});

function RightArea({ productTitle, category, rate, count, price, handleClick }) {
  const classess = styles();

  return (
    <>
      <Typography
        sx={{ fontSize: "30px", fontWeight: 700, marginBottom: "8px" }}
      >
        {productTitle}
      </Typography>

      <Box display="flex" alignItems="center" mb={1}>
        <Typography>Category:</Typography>
        <Typography
          ml={1}
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "capitalize",
            marginTop: "2px",
          }}
        >
          {category}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mb={2} sx={{ gap: "8px" }}>
        <Typography>Rated: </Typography>
        <Rating name="read-only" value={rate} readOnly />
        <Typography sx={{ fontSize: "14px", fontWeight: 600, lineHeight: 1 }}>
          {" "}
          ({count})
        </Typography>
      </Box>

      <Typography
        mb={1}
        sx={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}
      >
        Option
      </Typography>

      <Box mb={2} sx={{ gap: "8px" }}>
        <CustomButton btnTitle="option 1" />
        <CustomButton btnTitle="option 2" />
        <CustomButton btnTitle="option 3" />
        <CustomButton btnTitle="option 4" />
      </Box>

      <Typography
        sx={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}
      >
        Type
      </Typography>

      <Box mb={3}>
        <CustomButton btnTitle="type 1" />
        <CustomButton btnTitle="type 2" />
        <CustomButton btnTitle="type 3" />
      </Box>

      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: 700,
          color: "rgb(210, 63, 87)",
          marginBottom: "4px",
          lineHeight: 1,
        }}
      >
        ${price}
      </Typography>

      <Typography
        mb={2}
        sx={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.5 }}
      >
        Stock Available
      </Typography>

      <Button sx={{ ...classess.styledButton }} onClick={handleClick}>
        Add To Cart
      </Button>

      <Box display="flex" alignItems="center">
        <Typography>Sold By:</Typography>
        <Typography ml={1} sx={{ fontSize: "14px", fontWeight: 600 }}>
          Mobile Store
        </Typography>
      </Box>
    </>
  );
}

export default RightArea;
