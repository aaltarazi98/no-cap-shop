import {
  Card,
  CardMedia,
  Box,
  Typography,
  Stack,
  Button,
  Container,
} from "@mui/material";

export function Missing() {
  return (
    <Card sx={{ position: "relative" }} elevation={0}>
      <CardMedia
        component="img"
        image={
          "https://images.unsplash.com/photo-1574192324001-ee41e18ed679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        width="100%"
        height={500}
      />
      <Box
        sx={{
          position: "absolute",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: "center",
          color: "#00000",
          height: "100%",
          width: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Oops, looks like something’s wrong... 404
          </Typography>
          <Typography variant="h6" textAlign="center" fontWeight="bold">
            Sorry, looks like that page is missing or no longer exists.
            Hopefully we can help you find what you are looking for.
          </Typography>
        </Container>
      </Box>
    </Card>
  );
}
