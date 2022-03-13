import {
  Container,
  Stack,
  Typography,
  Divider,
  Box,
  Grid,
  Modal,
  Slide,
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect } from "react";
import { ProductType } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

type Props = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Cart({ showCart, setShowCart }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state: RootState) => state.cart);
  const [subtotal, setSubtotal] = useState<number>(0);

  const handleRemove = (index: number) => {
    dispatch(removeItem(index));
  };

  const reviewCart = () => {
    setShowCart(false);
    navigate("/cart");
  };

  useEffect(() => {
    let total = 0;
    cart?.map((item) => (total += item.price));
    setSubtotal(total);
  }, [cart]);

  return (
    <Modal open={showCart} onClose={() => setShowCart(false)}>
      <Slide in={showCart} direction="left">
        <Container
          maxWidth="xs"
          sx={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            bgcolor: "white",
            width: { xs: "100%", md: 400 },
          }}
        >
          <Stack
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ py: 2 }}
          >
            <Typography variant="h6">Shopping Cart</Typography>
            <ClearIcon fontSize="large" onClick={() => setShowCart(false)} />
          </Stack>
          <Divider sx={{ width: "100%" }} />

          {cart.length === 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography textAlign="center" color="#a8a8a8">
                Your cart is currently empty.
              </Typography>
            </div>
          ) : (
            <>
              <Box overflow="auto" height="70%" p={1}>
                {cart?.map((item: ProductType, index: number) => (
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
                      <ClearIcon
                        fontSize="small"
                        sx={{ mb: 2 }}
                        onClick={() => handleRemove(index)}
                      />
                      <Typography variant="subtitle2">${item.price}</Typography>
                    </Grid>
                  </Grid>
                ))}
              </Box>
              <Stack direction="column" spacing={2} mt={2}>
                <Typography variant="subtitle2">
                  Taxes and shipping are calculated at Checkout
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  Subtotal: ${subtotal}
                </Typography>
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={reviewCart}
                >
                  View Cart
                </Button>
                <Button
                  size="large"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </Button>
              </Stack>
            </>
          )}
        </Container>
      </Slide>
    </Modal>
  );
}
