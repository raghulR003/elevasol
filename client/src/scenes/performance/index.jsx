import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";

const Performance = () => {
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Symptom Check" subtitle="Our highly-accurate symptom checker" />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
        position="relative"
      >
        {/* Add the iframe */}
        <iframe
          title="Geography Map"
          src="https://symptom-checker-tan.vercel.app/"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </Box>
    </Box>
  );
};

export default Performance;
