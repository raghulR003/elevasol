import React from "react";
import { Box, CircularProgress, useTheme } from "@mui/material";
import Header from "components/Header";

const MedicalReport = () => {
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Medical Report" subtitle="Medical Report, on demand" />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
        position="relative"
      >
        {/* Add the iframe */}
        <iframe
          title="Medical Report"
          src="https://infoserverpro.onrender.com/medireport"
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
};

export default MedicalReport;
