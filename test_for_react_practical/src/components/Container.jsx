import { Box, Typography } from "@mui/material";
import React from "react";

const Container = () => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        color: "blue",
      }}
    >
      <Box
        sx={{
          position: "relative",
          marginX: "auto",
          width: "100%",
        }}
      >
        <Typography variant="h5" fontWeight="700">
          Patient Info
        </Typography>

        <Typography variant="h6" fontSize="15px">
          Waiting Room / Patient Info
        </Typography>
      </Box>
    </Box>
  );
};

export default Container;
