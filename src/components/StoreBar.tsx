import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import {
  Stack,
  Button,
  Grid,
  Paper,
  Divider,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { logout, reset } from "../features/user/userSlice";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StoreBar({ search, setSearch, setShowCart }: Props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { cart } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showBurger, setShowBurger] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  function handleMenuButtons(e: any) {
    switch (e.currentTarget.id) {
      case "orders":
        navigate("/orders");
        break;
      case "credentials":
        if (user) handleLogout();
        else navigate("/login");
        break;
    }
    setShowBurger(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    const data = new FormData(e.currentTarget);
    const input: string = String(data.get("search"));
    e.preventDefault();
    setSearch(input);
    navigate("/search");
  }

  const storeName: JSX.Element = (
    <Grid
      item
      xs={6}
      lg={4}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      fontSize={32}
      onClick={() => navigate("/")}
    >
      <Typography variant="h5" fontWeight="bold">
        NO CAP
      </Typography>
      <KeyboardAltOutlinedIcon sx={{ mx: 2 }} fontSize="inherit" />
    </Grid>
  );

  const cartButton: JSX.Element = (
    <Badge badgeContent={cart.length} color="secondary">
      <ShoppingCartOutlinedIcon onClick={() => setShowCart(true)} />
    </Badge>
  );

  const burgerMenu: JSX.Element = (
    <Paper sx={{ display: "flex", flexDirection: "column" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Keycaps" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Keycap Sets" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Keyboards" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton id="orders" onClick={handleMenuButtons}>
            <ListItemText primary="Order Status" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Find Store" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton id="credentials" onClick={handleMenuButtons}>
            {user ? (
              <ListItemText primary="Log Out" />
            ) : (
              <ListItemText primary="Sign In" />
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );

  const searchMenu: JSX.Element = (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      component="form"
      onSubmit={handleSubmit}
      square
      elevation={0}
    >
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <SearchIcon color="secondary" sx={{ mx: -1 }} />
        <InputBase
          sx={{ px: 3, py: 0.3 }}
          id="search"
          name="search"
          placeholder="Explore the catalog…"
          inputProps={{ "aria-label": "search" }}
        />
      </Stack>
      <Divider sx={{ width: "100%" }} />
    </Paper>
  );
  return (
    <>
      <Box>
        <Stack
          sx={{
            bgcolor: "#000000",
            display: "",
            color: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: "100%",
            p: 0.5,
            textDecoration: "underline",
          }}
        >
          <Typography variant="subtitle2">
            Please note that this project is a demo and a work in progress, so
            not all features are yet functional! Cloned after{" "}
            <a
              href="https://www.nixon.com"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              www.nixon.com
            </a>
          </Typography>
        </Stack>
        <AppBar position="static" elevation={1}>
          <Toolbar sx={{ height: { lg: 125 } }}>
            {/* Display for desktop */}

            <Grid container sx={{ display: { xs: "none", lg: "flex" } }}>
              <Grid
                item
                xs={12}
                display="flex"
                flexDirection="row"
                justifyContent="space-evenly"
              >
                <Grid
                  item
                  xs={4}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  {searchMenu}
                </Grid>
                {storeName}
                <Grid
                  item
                  xs={4}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={() => navigate("/orders")}
                    sx={{ mr: 1 }}
                  >
                    Order Status
                  </Button>
                  <Button variant="text" color="inherit" sx={{ mr: 1 }}>
                    Find Store
                  </Button>
                  {user ? (
                    <>
                      <Button
                        variant="text"
                        color="inherit"
                        sx={{ mr: 1 }}
                        onClick={handleLogout}
                      >
                        Log out
                      </Button>
                      <Button
                        variant="text"
                        color="inherit"
                        sx={{ mr: 1 }}
                        onClick={() => navigate("/admin")}
                      >
                        Admin
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="text"
                      color="inherit"
                      sx={{ mr: 1 }}
                      onClick={() => navigate("/login")}
                    >
                      Sign in
                    </Button>
                  )}
                  {cartButton}
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mt={2}
                p={0}
                m={0}
              >
                <Grid
                  item
                  xs={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    variant="text"
                    color="inherit"
                    size="large"
                    sx={{ width: 150 }}
                  >
                    Keycaps
                  </Button>
                  <Button
                    variant="text"
                    color="inherit"
                    size="large"
                    sx={{ width: 150 }}
                  >
                    Keycap Sets
                  </Button>
                  <Button
                    variant="text"
                    color="inherit"
                    size="large"
                    sx={{ width: 150 }}
                  >
                    Keyboards
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* Display for mobile and smaller screens*/}

            <Grid container sx={{ display: { xs: "flex", lg: "none" } }}>
              <Grid
                item
                display="flex"
                flexDirection="row"
                alignItems="center"
                xs={3}
              >
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={() => setShowBurger(!showBurger)}
                >
                  {showBurger ? <ClearIcon /> : <MenuIcon />}
                </IconButton>
              </Grid>
              {storeName}
              <Grid
                item
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-end"
                xs={3}
              >
                <IconButton color="inherit" size="large">
                  <SearchIcon onClick={() => setShowSearch(!showSearch)} />
                </IconButton>
                {cartButton}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {showSearch && searchMenu}
        {showBurger && burgerMenu}
      </Box>
    </>
  );
}
