import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import keyboard1 from "../../assets/keyboard (1).jpg";
import keyboard2 from "../../assets/keyboard (2).jpg";
import keyboard3 from "../../assets/keyboard (3).jpg";
import keyboard4 from "../../assets/keyboard (4).jpg";
import keyboard5 from "../../assets/keyboard (5).jpg";
import keyboard6 from "../../assets/keyboard (6).jpg";

const pics: string[] = [
  keyboard1,
  keyboard2,
  keyboard3,
  keyboard4,
  keyboard5,
  keyboard6,
];

export const Instagram = () => {
  return (
    <Box sx={{ m: 3, mx: 0 }}>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          my: 6,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          #NOCAP
        </Typography>
        <Typography variant="subtitle1" textAlign="center" gutterBottom>
          Get featured by showing us how you #nocap on Instagram
        </Typography>
        <Button variant="contained" color="secondary" sx={{ width: 250 }}>
          Shop Instagram
        </Button>
      </Container>

      <ImageList cols={6} gap={10}>
        {pics.map((pic, index) => (
          <ImageListItem key={`${index}_${pic}`}>
            <img
              src={pic}
              style={{ height: "450px", width: "auto", margin: 0 }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Container maxWidth="sm" sx={{ my: 6 }}>
        <Typography
          variant="subtitle1"
          paragraph
          textAlign="center"
          lineHeight="22px"
        >
          No Cap is the one stop shop for premium key caps and keyboards. With a
          wide range of quality switches, gaming keyboards, keycap sets, and
          more, No Cap stays true to its code, productivity, and gaming roots.
          From everyday coding & mechanical keyboards for some hacking to custom
          keys and switches for professional gaming, there's something for
          everyone. Whether you need a blue switch keyboard or are looking to
          add flair to your keyboard, No Cap will key you in. Never stop
          capping.
        </Typography>
      </Container>
    </Box>
  );
};
