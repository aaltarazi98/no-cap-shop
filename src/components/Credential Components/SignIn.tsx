import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/user/userSlice";
import { RootState } from "../../store";
import React, { useEffect, useState } from "react";

export function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [forgotPass, setForgoitPass] = useState<boolean>(false);

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (isError) {
      console.error(message);
      console.log("Error!");
    }
    if (isSuccess || user) {
      console.log("Success hit");
      navigate("/");
    }
    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: String(data.get("email")!),
      password: String(data.get("password")!),
    };
    dispatch(login(userData));
  };

  const handleDemo = () => {
    const userData = {
      email: "registertest@email.com",
      password: "Pass123!",
    };
    dispatch(login(userData));
  };

  if (forgotPass) {
    return (
      <Container component="main" maxWidth="xs" sx={{ ml: { md: -4 } }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography gutterBottom component="h1" variant="h5">
            Reset your password
          </Typography>
          <Typography variant="subtitle1">
            We will send you an email to reset your password.
          </Typography>
          <TextField
            required
            fullWidth
            type="email"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            color="secondary"
            sx={{ mt: 5 }}
          />
          <Button
            type="submit"
            color="secondary"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography
                variant="subtitle1"
                onClick={() => setForgoitPass(false)}
              >
                Cancel
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  } else {
    return (
      <Container component="main" maxWidth="xs" sx={{ ml: { md: -4 } }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography gutterBottom component="h1" variant="h5">
            Login
          </Typography>
          <Typography variant="subtitle1">
            Sign in to get access to convenient features and checkout.
          </Typography>
          <Box component="form" sx={{ mt: 5 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  color="secondary"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color="secondary"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              color="secondary"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography
                  variant="subtitle1"
                  onClick={() => setForgoitPass(true)}
                >
                  Forgot your password?
                </Typography>
              </Grid>
            </Grid>
            <Button
              color="secondary"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleDemo}
            >
              Demo Sign In
            </Button>
            {isError && (
              <Alert severity="error">
                {message || "Trouble connecting to server!"}
              </Alert>
            )}
          </Box>
        </Box>
      </Container>
    );
  }
}
