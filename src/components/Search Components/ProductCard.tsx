import {
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { ProductType } from "../../types";

type Props = {
  product: ProductType;
};

export function ProductCard({ product }: Props) {
  return (
    <Card elevation={0}>
      <CardMedia component="img" height={300} image={product.image} />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          {product.name}
        </Typography>
        <Typography variant="subtitle2" textAlign="center" gutterBottom>
          ${product.price}
        </Typography>
        {/* <Rating
          value={product.rating}
          readOnly
          size="small"
          sx={{ color: "black" }}
          precision={0.5}
        /> */}
      </CardContent>
    </Card>
  );
}
