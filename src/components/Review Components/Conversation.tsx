import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Typography, Container, Stack, Button } from "@mui/material";

export function Conversation() {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        A Two-Way Conversation
      </Typography>
      <Typography variant="subtitle1" textAlign="center">
        Need Help? Our CS team is live M-Th 8:00am - 5:00pm PST and F 9:00am -
        5:00pm PST . Our community is a vital part of our brand, we would love
        to hear from you. Follow us on Instagram, Facebook, and Twitter.
      </Typography>
      <Stack
        flexDirection="row"
        justifyContent="space-evenly"
        fontSize="42px"
        my={7}
      >
        <Stack flexDirection="column" alignItems="center">
          <MailOutlineIcon fontSize="inherit" />
          <Button color="secondary">Message Us</Button>
        </Stack>
        <Stack flexDirection="column" alignItems="center">
          <CallOutlinedIcon fontSize="inherit" />
          <Button color="secondary">Call Us</Button>
        </Stack>
        <Stack flexDirection="column" alignItems="center">
          <ChatOutlinedIcon fontSize="inherit" />
          <Button color="secondary">Chat With Us</Button>
        </Stack>
      </Stack>
    </Container>
  );
}
