import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Container,
  Modal,
  TextField,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Toolbar } from "./toolbar";
import { useState, useEffect } from "react";
import axios from "axios";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  token: string | undefined | null;
}

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 300 },
  { field: "name", headerName: "Name", width: 300 },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    renderCell: (params: any) => {
      return <>${params.row.price}</>;
    },
  },
];

const API = process.env.REACT_APP_SERVER! + "/products";

export function Products({ token }: Props) {
  const [data, setData] = useState<Location[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    axios({
      method: "POST",
      url: API,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        name: String(form.get("name")),
        price: Number(form.get("price")),
        description: String(form.get("description")),
        productImage: String(form.get("productImage")),
      },
    })
      .then((response) => e.currentTarget.reset())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: API,
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 1, md: 3 } }}>
      <Paper sx={{ p: { xs: 1, md: 1 }, bgcolor: "#e1e1e1" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" sx={{ m: { xs: 1, md: 2 } }}>
            Products
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setOpen(true)}
            endIcon={<AddIcon />}
          >
            Add Item
          </Button>
        </Stack>

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
            pageSize={20}
            components={{ Toolbar: Toolbar }}
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
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Paper
            component="form"
            sx={{
              p: 3,
              display: "flex",
              width: "90%",
            }}
            onSubmit={handleSubmit}
          >
            <Stack direction="column" sx={{ width: "100%" }} spacing={2}>
              <Stack direction="row" justifyContent="space-between">
                <Typography gutterBottom fontWeight="bold" variant="h5">
                  Add a Product
                </Typography>
                <ClearIcon onClick={() => setOpen(false)} />
              </Stack>

              <TextField
                color="secondary"
                label="Product name"
                name="name"
                required
                autoComplete="off"
                autoFocus
              />
              <TextField
                type="number"
                color="secondary"
                label="Price"
                name="price"
                autoComplete="off"
                required
              />
              <TextField
                autoComplete="off"
                color="secondary"
                label="Description"
                name="description"
                required
                multiline
                rows={4}
              />
              <TextField
                autoComplete="off"
                color="secondary"
                label="Image URL"
                name="productImage"
                required
              />
              <Button color="secondary" variant="contained" type="submit">
                Add Item
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Modal>
    </Container>
  );
}
