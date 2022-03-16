import {
  Container,
  Stack,
  Typography,
  Divider,
  Box,
  Grid,
  Button,
  TextField,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useState, useEffect, useRef } from "react";
import { ProductType } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { reset, purchase } from "../features/cart/cartSlice";

const CARD_OPTIONS = {
  iconStyle: "solid" as const,
  style: {
    base: {
      iconColor: "#a2a2a2",
      color: "#000000",
      fontWeight: "500",
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "20px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#a2a2a2",
      },
      "::placeholder": {
        color: "#a2a2a2",
      },
    },
    invalid: {
      iconColor: "#8B0000",
      color: "#8B0000",
    },
  },
};

export function Checkout() {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const { cart, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.cart
  );
  const { user } = useSelector((state: RootState) => state.user);

  const handlePurchase = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardElement = elements!.getElement(CardElement);
    const data = new FormData(e.currentTarget);
    const address: string = String(data.get("address"));

    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: "card",
      card: cardElement!,
    });

    if (!error) {
      const orderData = {
        cart,
        user,
        paymentId: paymentMethod!.id,
        amount: subtotal + 10,
        address,
      };
      dispatch(purchase(orderData));
    } else {
      console.error(error);
    }
  };

  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    if (isError) {
      console.error(message);
    } else if (isSuccess) {
      formRef?.current?.reset()
      dispatch(reset)
    }
    let total = 0;
    cart?.map((item) => (total += item.price));
    setSubtotal(total);
  }, [cart]);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} lg={5} p={2} display="flex" flexDirection="column">
          <Typography
            variant="h5"
            mb={2}
            fontWeight="bold"
            gutterBottom
            id="address"
          >
            Order details
          </Typography>
          {cart?.map((item: ProductType) => (
            <Grid
              container
              display="flex"
              spacing={2}
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={4} overflow="hidden">
                <img src={item.image} height={100} />
              </Grid>

              <Grid item xs={5}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.name}
                </Typography>
              </Grid>

              <Grid
                item
                xs={3}
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                justifyContent="space-between"
              >
                <Typography variant="subtitle1">${item.price}</Typography>
              </Grid>
            </Grid>
          ))}
          <Divider />
          <Stack flexDirection="row" justifyContent="space-between" pt={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Subtotal
            </Typography>
            <Typography variant="subtitle1">${subtotal}</Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="space-between" pb={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Shipping
            </Typography>
            <Typography variant="subtitle1">$10.00</Typography>
          </Stack>
          <Divider />
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            py={1}
            mb={4}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Total
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              ${subtotal + 10}
            </Typography>
          </Stack>
        </Grid>
        <Divider orientation="vertical" flexItem />

        <Grid
          item
          xs={12}
          lg={6}
          p={2}
          px={{ xs: 2, lg: 8 }}
          component="form"
          onSubmit={handlePurchase}
          ref={formRef}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Shipping address
          </Typography>
          <TextField
            required
            color="secondary"
            sx={{ my: 2 }}
            label="Full address"
            fullWidth
            name="address"
            autoFocus
          />
          <Typography variant="h5" mb={2} fontWeight="bold" gutterBottom>
            Payment card
          </Typography>
          <Paper variant="outlined" sx={{ p: 1 }}>
            <CardElement options={CARD_OPTIONS} />
          </Paper>

          {isLoading ? (
            <Stack alignItems="center" justifyContent="center" my={4}>
              <CircularProgress color="secondary" />
            </Stack>
          ) : (
            <Stack direction="row" justifyContent="space-between" my={4}>
              <Button color="secondary" onClick={() => navigate("/cart")}>
                Return to cart
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: 200 }}
                type="submit"
              >
                Place order
              </Button>
            </Stack>
          )}
          {isSuccess && <Alert severity="success">{message}</Alert>}
          {isError && <Alert severity="error">{message}</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
}
