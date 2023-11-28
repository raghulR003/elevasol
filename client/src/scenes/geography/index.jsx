import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";


const Geography = () => {
  const theme = useTheme();
 
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Live Location" subtitle="Enabled by worker locations" />
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
          src="http://127.0.0.1:5500/map.html"
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
}

export default Geography