import { ProductType } from "../../types";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";

import {
  Grid,
  Box,
  CardMedia,
  Stack,
  CardContent,
  Rating,
  Button,
  Typography,
} from "@mui/material";

type Props = {
  product: ProductType;
  index: number;
  setProduct: React.Dispatch<ProductType>;
};

export function Product({ product, index, setProduct }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemove = (index: number) => {
    dispatch(removeItem(index));
  };

  return (
    <Stack
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      flexDirection="row"
      p={3}
    >
      <Stack direction="row">
        <img src={product.image} height={100} />
        <Stack direction="column">
          <Typography variant="subtitle1" fontWeight="bold">
            {product.name}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            ${product.price}
          </Typography>
          <Stack direction="row">
            <Button
              size="small"
              color="secondary"
              onClick={() => {
                navigate("/product");
                setProduct(product);
              }}
            >
              Edit
            </Button>
            <Button
              color="secondary"
              size="small"
              onClick={() => handleRemove(index)}
            >
              Remove
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <ClearIcon
        fontSize="small"
        sx={{ mb: 2 }}
        onClick={() => handleRemove(index)}
      />
    </Stack>
  );
}
