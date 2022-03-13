import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { Container, Button, Link, Modal } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { Toolbar } from "./toolbar";
import { useState, useEffect } from "react";
import { OrderType } from "../../types";

interface Props {
  token: string | undefined | null;
}

export function Orders({ token }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<OrderType[]>([]);

  // Function to get paystubs and update data state

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER!}/orders`,
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);
  const columns: GridColDef[] = [
    { field: "_id", headerName: "Order ID", width: 200 },
    { field: "products", headerName: "Product ID's", width: 300 },
    { field: "address", headerName: "Address", width: 300 },
    { field: "user", headerName: "User ID", width: 200 },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 1, md: 3 } }}>
      <Paper sx={{ p: { xs: 1, md: 1 }, bgcolor: "#e1e1e1" }}>
        <Typography variant="h5" sx={{ m: { xs: 1, md: 2 } }}>
          Orders
        </Typography>
        <div
          style={{
            height: "80vh",
            width: "100%",
            backgroundColor: "whitesmoke",
          }}
        >
          <DataGrid
            getRowId={(row) => row._id}
            rows={data}
            columns={columns}
            components={{ Toolbar: Toolbar }}
            pageSize={20}
            rowsPerPageOptions={[20]}
            disableSelectionOnClick
            density="standard"
            onSelectionModelChange={(selectionModel: any, details: any) => {
              console.log(selectionModel);
              console.log(details);
            }}
          />
        </div>
      </Paper>
    </Container>
  );
}
