import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const styles = () => ({
  card: {
    position: "relative",
    boxShadow: "none",

    "&:hover button": {
      display: "block",
    },
  },

  image: {
    width: "100%",
    height: { xs: "250px", lg: "350px" },
    mixBlendMode: "multiply",
    objectFit: "contain",
  },

  button: {
    position: "absolute",
    bottom: 24,
    backgroundColor: "#1F2937",
    color: "white",
    width: "95%",
    transition: "background-color 0.3s",
    fontSize: "17px",
    fontWeight: 530,
    textTransform: "none",
    display: "none",

    "&:hover": {
      backgroundColor: "#343434",
    },
  },
});

function CategoriesCard({
  imageUrl,
  category,
  productTitle,
  price,
  rating,
  reviews,
}) {
  const classess = styles();

  return (
    <Card sx={classess.card}>
      <Box p={2} sx={{ backgroundColor: "#E3E9EF" }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="Placeholder"
          sx={{ ...classess.image }}
        />
      </Box>

      <Box position="relative">
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={classess.button}
          >
            Quick View
          </Button>
        </CardActions>
      </Box>

      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#AEB4BE",
            textTransform: "capitalize",
          }}
        >
          {category}
        </Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 700, lineHeight: 1.75 }}
        >
          {productTitle}
        </Typography>
        <Typography
          sx={{
            fontSize: "17px",
            fontWeight: 700,
            paddingTop: "4px",
            paddingBottom: "4px",
          }}
        >
          ${price}
        </Typography>

        <Box
          display={{ xs: "block", sm: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <Rating
            name="read-only"
            value={rating}
            size="small"
            readOnly
            sx={{ fontSize: "16px" }}
          />
          <Typography
            ml={1}
            sx={{ fontSize: "12px", fontWeight: 600, color: "#AEB4BE" }}
          >
            ({reviews} Reviews)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CategoriesCard;
