import {
  Container,
  Box,
  Typography,
  Divider,
  Grid,
  Button,
  Rating,
  Stack,
} from "@mui/material";
import { ProductType } from "../types";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

type Props = {
  product: ProductType | undefined;
};

export function ProductDisplay({ product }: Props) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem(product!));
  };

  return (
    <Container maxWidth="lg" sx={{ my: 2, minHeight: 600 }}>
      <Grid container>
        <Grid item lg={8} xs={12}>
          <img width="100%" src={product?.image} />
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mt: 10,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {product?.name}
          </Typography>
          <Rating
            value={product?.rating}
            readOnly
            size="small"
            sx={{ color: "black" }}
            precision={0.5}
          />
          <Typography paragraph variant="subtitle1" sx={{ my: 2 }}>
            {product?.description}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 4,
          }}
        >
          <Divider sx={{ width: "100%", my: 2 }} />
          <Typography variant="h5" gutterBottom>
            ${product?.price}
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            sx={{ width: 300 }}
            onClick={handleAdd}
          >
            Add to Cart
          </Button>
          <Stack direction="row" sx={{ mt: 2 }}>
            <LocalShippingOutlinedIcon sx={{ mr: 2 }} />
            <Typography variant="subtitle2">Free Shipping + Returns</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
