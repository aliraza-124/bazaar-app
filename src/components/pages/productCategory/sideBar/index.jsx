import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Rating,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ApiLoader from "../../../muiLoader";

const styles = () => ({
  styledMainBox: {
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
  },

  styledTypograpghy: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 2,
    color: "#92879C",
    textTransform: "capitalize",
  },

  styledHeadings: {
    fontSize: "12px",
    fontWeight: 600,
    marginTop: "48px",
    marginBottom: "16px",
    color: "#2B3445",
  },

  styledCheckbox: {
    "&.Mui-checked": {
      color: "#0F3460",
    },
  },
});

function SideBar() {
  const queryKey = "categories";
  const fetchCategories = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  };

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery(queryKey, fetchCategories);

  if (isLoading) {
    return <ApiLoader loadingTitle="Loading products by categories..." />;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const classess = styles();

  return (
    <Box p={2} bgcolor="white" sx={classess.styledMainBox}>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "10px",
          color: "#2B3445",
        }}
      >
        Categories
      </Typography>

      {categories.map((category) => (
        <Typography key={category} sx={classess.styledTypograpghy}>
          {category}
        </Typography>
      ))}

      <Typography sx={classess.styledHeadings}>Brands</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox size="small" sx={classess.styledCheckbox} />}
          label="Mac"
        />
        <FormControlLabel
          control={<Checkbox size="small" sx={classess.styledCheckbox} />}
          label="Karts"
        />
        <FormControlLabel
          control={<Checkbox size="small" sx={classess.styledCheckbox} />}
          label="Baals"
        />
        <FormControlLabel
          control={<Checkbox size="small" sx={classess.styledCheckbox} />}
          label="Bukks"
        />
        <FormControlLabel
          control={<Checkbox size="small" sx={classess.styledCheckbox} />}
          label="Luasis"
        />

        <Box mt={5} display="flex" flexDirection="column">
          <FormControlLabel
            control={
              <Checkbox size="small" sx={{ ...classess.styledCheckbox }} />
            }
            label="On Sale"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={classess.styledCheckbox} />}
            label="In Stock"
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={classess.styledCheckbox} />}
            label="Featured"
          />
        </Box>
      </FormGroup>

      <Typography sx={classess.styledHeadings}>Ratings</Typography>
      <Box>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" sx={classess.styledCheckbox} />}
            label={<Rating value={5} size="small" readOnly />}
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={classess.styledCheckbox} />}
            label={<Rating value={4} size="small" readOnly />}
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={classess.styledCheckbox} />}
            label={<Rating value={3} size="small" readOnly />}
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={classess.styledCheckbox} />}
            label={<Rating value={2} size="small" readOnly />}
          />
          <FormControlLabel
            control={<Checkbox size="small" sx={classess.styledCheckbox} />}
            label={<Rating value={1} size="small" readOnly />}
          />
        </FormGroup>
      </Box>
    </Box>
  );
}

export default SideBar;
