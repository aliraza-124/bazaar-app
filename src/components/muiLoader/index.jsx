import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

function ApiLoader({ loadingTitle }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress
        color="primary"
        size={80}
        thickness={4}
        sx={{ color: "#D23F57" }}
      />
      <Typography variant="body1" mt={2}>
        {loadingTitle}
      </Typography>
    </Box>
  );
}

export default ApiLoader;
