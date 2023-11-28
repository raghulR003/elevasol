import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { useGetCustomersQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "WorkerID",
      headerName: "Worker ID",
      flex: 1,
    },
    {
      field: "Position",
      headerName: "Position",
      flex: 0.5,
      
    },
    {
      field: "InsuranceID",
      headerName: "Insurance ID",
      flex: 0.4,
    },
    {
      field: "Country",
      headerName: "Country",
      flex: 1,
    },
    
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Base Clientele" subtitle="See the list of workforce under the client" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Customers;
