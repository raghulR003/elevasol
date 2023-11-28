import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";

const Admin = () => {
  const theme = useTheme();
 
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Interact with the map" subtitle="Highly accurate and up-to-date" />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
        position="relative"
      >
        {/* Add the iframe */}
        <iframe
          title="Map"
          src="https://maps-related.vercel.app/"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </Box>
    </Box>
  );
};

export default Admin;
