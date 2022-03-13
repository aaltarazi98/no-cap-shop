import {
  Card,
  CardMedia,
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Grid,
} from "@mui/material";
import keyboardDisplay from "../../assets/keyboardDisplay.jpg";
import keycaps from "../../assets/keycaps.jpg";
import coloredset from "../../assets/coloredset.jpg";
import gaming from "../../assets/gaming.jpg";
import coding from "../../assets/coding.jpg";

export function Selections() {
  const Selection = (text: any, buttons: any[], image: any) => (
    <Card sx={{ position: "relative" }}>
      <CardMedia component="img" image={image} height={400} width={400} />
      <Container
        maxWidth="md"
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h6">{text}</Typography>
        <Stack direction="row" spacing={2}>
          {buttons.map((button: JSX.Element) => button)}
        </Stack>
      </Container>
    </Card>
  );

  return (
    <Grid container spacing={4} sx={{ my: 0 }}>
      <Grid item xs={12} md={4}>
        <Card sx={{ position: "relative" }} square>
          <CardMedia component="img" image={keycaps} height={400} width={400} />
          <Container
            maxWidth="md"
            sx={{
              position: "absolute",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              top: 0,
              left: 0,
              height: 400,
              color: "white",
              textShadow:
                "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Individiual Keycaps
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button size="large">Shop Now</Button>
            </Stack>
          </Container>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ position: "relative" }} square>
          <CardMedia
            component="img"
            image={keyboardDisplay}
            height={400}
            width={400}
          />
          <Container
            maxWidth="md"
            sx={{
              position: "absolute",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              top: 0,
              left: 0,
              height: 400,
              color: "white",
              textShadow:
                "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Keyboards
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button size="large">Shop Now</Button>
            </Stack>
          </Container>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ position: "relative" }} square>
          <CardMedia
            component="img"
            image={coloredset}
            height={400}
            width={400}
          />
          <Container
            maxWidth="md"
            sx={{
              position: "absolute",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              top: 0,
              left: 0,
              height: 400,
              color: "white",
              textShadow:
                "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Key Sets
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button size="large">Shop Now</Button>
            </Stack>
          </Container>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card sx={{ position: "relative" }} square>
          <CardMedia
            component="img"
            image={coding}
            sx={{ height: { xs: 400, md: 700 } }}
          />
          <Container
            maxWidth="md"
            sx={{
              position: "absolute",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              top: 0,
              left: 0,
              height: { xs: 400, md: 700 },
              color: "white",
              textShadow:
                "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Coding
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button size="large">Shop Now</Button>
            </Stack>
          </Container>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ position: "relative" }} square>
          <CardMedia
            component="img"
            image={gaming}
            sx={{ height: { xs: 400, md: 700 } }}
          />
          <Container
            maxWidth="md"
            sx={{
              position: "absolute",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              top: 0,
              left: 0,
              height: { xs: 400, md: 700 },
              color: "white",
              textShadow:
                "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Gaming
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button size="large">Shop Now</Button>
            </Stack>
          </Container>
        </Card>
      </Grid>
    </Grid>
  );
}
