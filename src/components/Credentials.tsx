import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Register } from "./Credential Components/Register";
import { SignIn } from "./Credential Components/SignIn";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { reset } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export function Credentials() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (isError) {
      console.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <Container component="main" maxWidth="md">
      <Grid container>
        <Grid item xs={12} md={6}>
          <SignIn />
        </Grid>
        <Grid item xs={12} md={6}>
          <Register />
        </Grid>
      </Grid>
    </Container>
  );
}
