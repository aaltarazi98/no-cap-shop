import React from "react";
import footer from "../assets/footer.jpg";
import {
  Box,
  Card,
  CardMedia,
  List,
  ListItem,
  Button,
  Typography,
  Grid,
  Divider,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export function Footer() {
  return (
    <Box sx={{ minHeight: { xs: 900, md: 720 } }}>
      <Card sx={{ position: "relative" }} square elevation={0}>
        <CardMedia component="img" image={footer} height={200} width="100%" />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            top: 0,
            left: 0,
            color: "white",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Become a No Cap Insider
          </Typography>
          <Button variant="contained" size="large">
            Get 10% Off
          </Button>
        </Box>
      </Card>
      <Grid container height={500} mt={2}>
        <Grid
          item
          xs={12}
          my={0}
          display={{ xs: "none", md: "flex" }}
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Stack display="flex" flexDirection="row" fontSize={32}>
            <Typography variant="h5" fontWeight="bold">
              NO CAP
            </Typography>
            <KeyboardAltOutlinedIcon sx={{ mx: 2 }} fontSize="inherit" />
          </Stack>
          <Stack direction="row" spacing={2} fontSize={26}>
            <InstagramIcon fontSize="inherit" />
            <PinterestIcon fontSize="inherit" />
            <FacebookIcon fontSize="inherit" />
            <YouTubeIcon fontSize="inherit" />
            <TwitterIcon fontSize="inherit" />
          </Stack>
        </Grid>

        <Grid
          item
          xs={6}
          md={3}
          my={0}
          px={{ xs: 2 }}
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            Company
          </Typography>
          <Divider sx={{ width: "20%" }} />
          <List dense>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="About Us" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Work Here" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Team" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Stories" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Affiliate" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          display="flex"
          px={{ xs: 2 }}
          flexDirection="column"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            Customer Support
          </Typography>
          <Divider sx={{ width: "20%" }} />
          <List dense>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Customer Service" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Need a replacement" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Warranty" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="FAQs" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Contact Us" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          display="flex"
          px={{ xs: 2 }}
          flexDirection="column"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            Orders & Returns
          </Typography>
          <Divider sx={{ width: "20%" }} />
          <List dense>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Shipping" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Returns" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Promotions" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Shopping Cart" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          display={{ xs: "flex", md: "none" }}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Divider sx={{ width: "90%", my: 4 }} />
          <Stack
            direction="row"
            spacing={2}
            fontSize={26}
            justifyContent="center"
            alignItems="center"
          >
            <InstagramIcon fontSize="inherit" />
            <PinterestIcon fontSize="inherit" />
            <FacebookIcon fontSize="inherit" />
            <YouTubeIcon fontSize="inherit" />
            <TwitterIcon fontSize="inherit" />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
