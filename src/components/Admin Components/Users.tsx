import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container, Button, Modal, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { UserType } from "../../types";
import { Toolbar } from "./toolbar";
import axios from "axios";

interface Props {
  token: string | undefined | null;
}

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 300 },
  { field: "email", headerName: "Email", width: 300 },
];

export default function Users({ token }: Props) {
  const [data, setData] = useState<UserType[]>([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER!}/users`,
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 1, md: 3 } }}>
      <Paper sx={{ p: { xs: 1, md: 1 }, bgcolor: "#e1e1e1" }}>
        <Typography variant="h5" sx={{ m: { xs: 1, md: 2 } }}>
          {" "}
          Users
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
