import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";

const styles = () => ({
  styledMainBox: {
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
});

function DrawerCard({ imageUrl, productTitle, price, quantity, totalPrice }) {
  const classess = styles();

  return (
    <Card>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={classess.styledMainBox}
      >
        <Box display="flex" alignItems="center">
          <Box p={2}>
            <CardMedia
              component="img"
              image={imageUrl}
              alt="Placeholder"
              sx={{
                width: "140px",
                height: "140px",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </Box>

          <CardContent>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {productTitle}
            </Typography>

            <Box display="flex">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "#7D879C",
                  marginRight: "4px",
                }}
              >
                ${price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "#7D879C",
                  marginRight: "8px",
                }}
              >
                x {quantity}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgb(210, 63, 87)",
                  lineHeight: 1.5,
                }}
              >
                ${totalPrice}
              </Typography>
            </Box>
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
