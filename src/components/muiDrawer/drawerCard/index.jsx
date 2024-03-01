import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";

const styles = () => ({
  styledProductImg: {
    width: "75px",
    height: "75px",
    objectFit: "contain",
    mixBlendMode: "multiply",
  },

  styledProductTitle: {
    fontWeight: 600,
    fontSize: "14px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  styledProductPrice: {
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#7D879C",
    marginRight: "4px",
  },

  styledProductQuantity: {
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#7D879C",
    marginRight: "8px",
  },

  styledProductTotalPrice: {
    fontSize: "14px",
    fontWeight: 600,
    color: "rgb(210, 63, 87)",
    lineHeight: 1.5,
  },
});

function DrawerCard({ imageUrl, productTitle, price, quantity, totalPrice }) {
  const classess = styles();

  return (
    <Card elevation={0}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box p={1}>
            <CardMedia
              component="img"
              image={imageUrl}
              alt="Placeholder"
              sx={classess.styledProductImg}
            />
          </Box>

          <CardContent>
            <Typography sx={classess.styledProductTitle}>
              {productTitle}
            </Typography>

            <Box display="flex">
              <Typography sx={classess.styledProductPrice}>${price}</Typography>
              <Typography sx={classess.styledProductQuantity}>
                x {quantity}
              </Typography>
            </Box>
            <Typography sx={classess.styledProductTotalPrice}>
              ${totalPrice}
            </Typography>
          </CardContent>
        </Box>
        <Box p={2}>
          <CloseIcon color="#707070" fontSize="small" />
        </Box>
      </Box>
    </Card>
  );
}

export default DrawerCard;
