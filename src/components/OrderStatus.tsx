import { useSelector } from "react-redux";
import {
  Container,
  Typography,
  Button,
  Divider,
  Box,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { RootState } from "../store";
import { useState, useEffect } from "react";

import LockIcon from "@mui/icons-material/Lock";
import { Checkbox } from "@mui/material";
import { OrderType } from "../types";
import { Product } from "./Review Components/Product";
import { Conversation } from "./Review Components/Conversation";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export function OrderStatus() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<OrderType[]>([]);
  const { user } = useSelector((state: RootState) => state.user);

  //   Function for fetching user orders and applying to state
  async function fetchAndSetOrders(): Promise<void> {
    const data = await axios({
      method: "GET",
      url: process.env.REACT_APP_SERVER! + "/orders/" + user._id,
      headers: {
        Authorization: "Bearer " + user.token,
      },
    });

    if (data.data.length > 0) {
      setOrders(data.data);
    }
  }

  useEffect(() => {
    if (!user) navigate("/login");
    else {
      fetchAndSetOrders();
    }
  }, []);

  if (orders[0]) {
    return (
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
        <Grid container>
          <Grid item xs={12} py={{ xs: 3, md: 3 }}>
            <Typography variant="h4" fontWeight="bold">
              Your Orders
            </Typography>
          </Grid>
          {orders?.map((order: OrderType, index: number) => (
            <Grid item xs={12} my={2}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Order number {index + 1}:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Shipped to {order.address}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Ordered Product ID's:{" "}
                {order.products.map((id: string, index: number) => {
                  if (index === order.products.length - 1) return id;
                  else return id + ", ";
                })}
              </Typography>
              <Divider />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold">
          You have not set in any orders yet!
        </Typography>
      </Container>
    );
  }
}
