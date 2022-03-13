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
import { ProductType } from "../types";
import { Product } from "./Review Components/Product";
import { Conversation } from "./Review Components/Conversation";
import { useNavigate } from "react-router-dom";

type Props = {
  setProduct: React.Dispatch<ProductType>;
};

export function ReviewCart({ setProduct }: Props) {
  const navigate = useNavigate();
  const { cart } = useSelector((state: RootState) => state.cart);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [giftChecked, setGiftChecked] = useState<boolean>(false);

  useEffect(() => {
    let total = 0;
    cart?.map((item) => (total += item.price));
    setSubtotal(total);
  }, [cart]);

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
      <Grid container>
        <Grid item xs={12} py={{ xs: 3, md: 3 }}>
          <Typography variant="h4" fontWeight="bold">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          p={{ xs: 2, md: 3 }}
          bgcolor="#f5f5f5"
          display="flex"
          flexDirection={{ md: "row", xs: "column" }}
          alignItems={{ md: "center", xs: "flex-start" }}
          justifyContent="space-between"
        >
          <Typography variant="subtitle1" gutterBottom>
            Order Total ${subtotal}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ width: { xs: "100%", md: 200 } }}
            startIcon={<LockIcon />}
            onClick={() => navigate("/checkout")}
          >
            Check Out
          </Button>
        </Grid>
        <Grid item xs={12}>
          {cart.map((item: ProductType, index: number) => (
            <Product
              product={item}
              index={index}
              key={item.name + index}
              setProduct={setProduct}
            />
          ))}
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="row"
          alignItems="center"
          py={2}
        >
          <Checkbox
            color="secondary"
            checked={giftChecked}
            onClick={() => setGiftChecked(!giftChecked)}
          />
          <Typography variant="subtitle1">
            Add a gift message to your order
          </Typography>
        </Grid>
        {giftChecked && (
          <Grid item xs={12} mb={2}>
            <TextField
              color="secondary"
              label="Gift Message"
              placeholder="(Optional, max 250 characters)"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        )}
        <Grid item xs={12} spacing={2}>
          <Divider />
          <Typography my={1} variant="subtitle2" color="gray">
            Taxes and shipping are calculated at checkout
          </Typography>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight="bold">
              Subtotal ({cart.length} {cart.length === 1 ? "Item" : "Items"})
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              ${subtotal}
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          display="flex"
          alignItems="center"
          justifyContent="center"
          xs={12}
          my={2}
        >
          <Divider />
          <Button
            sx={{ my: 2, width: { xs: "100%", md: 400 } }}
            variant="contained"
            color="secondary"
            startIcon={<LockIcon />}
            onClick={() => navigate("/checkout")}
          >
            Check Out
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Conversation />
        </Grid>
      </Grid>
    </Container>
  );
}
