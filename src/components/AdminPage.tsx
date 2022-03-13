import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from "@mui/icons-material/Category";
import Users from "./Admin Components/Users";
import Container from "@mui/material/Container";
import { Orders } from "./Admin Components/Orders";
import { Products } from "./Admin Components/Products";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export function AdminPage() {
  const { user } = useSelector((state: RootState) => state.user);
  const [display, setDisplay] = useState<JSX.Element>(
    <Users token={user.token} />
  );

  if (!user) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Typography variant="h5" textAlign="center" gutterBottom>
          401 Error. Invalid Authorization
        </Typography>
      </Container>
    );
  } else {
    return (
      <>
        <Grid container>
          <Grid item xs={4} md={2}>
            <Paper variant="outlined" square sx={{ height: "95vh" }}>
              <ListItem
                button
                onClick={(): void => setDisplay(<Users token={user.token} />)}
              >
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
              <ListItem
                button
                onClick={(): void =>
                  setDisplay(<Products token={user.token} />)
                }
              >
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItem>
              <ListItem
                button
                onClick={(): void => setDisplay(<Orders token={user.token} />)}
              >
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItem>
            </Paper>
          </Grid>
          <Grid item xs={8} md={10}>
            {display}
          </Grid>
        </Grid>
      </>
    );
  }
}
