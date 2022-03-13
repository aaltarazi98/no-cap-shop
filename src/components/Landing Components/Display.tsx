import {
  Card,
  CardMedia,
  Box,
  Typography,
  Stack,
  Button,
  Container,
} from "@mui/material";
import displayImg from "../../assets/displayImg.jpg";

export function Display() {
  return (
    <Card sx={{ position: "relative" }} square elevation={0}>
      <CardMedia component="img" image={displayImg} height={800} width="100%" />
      <Container
        maxWidth="xs"
        sx={{
          mt: 1,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          top: { xs: 0, lg: "27%" },
          left: { xs: 0, lg: "12%" },
          color: "white",
          textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          p: { xs: 1, md: 5 },
        }}
      >
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Aggressively Stylish
        </Typography>
        <Typography variant="subtitle1" mt={2} mb={4} textAlign="center">
          Mechanical keyboards may be monotone, but ours know how to rebel.
        </Typography>
        <Button variant="contained" size="large" fullWidth>
          Shop Now
        </Button>
      </Container>
    </Card>
  );
}
