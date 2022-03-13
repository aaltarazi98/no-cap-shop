import {
  ThemeProvider,
  CssBaseline,
  Button,
  Box,
  Container,
} from "@mui/material";
import { ProductType } from "./types";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import { StoreBar } from "./components/StoreBar";
import { LandingPage } from "./components/LandingPage";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { ProductDisplay } from "./components/ProductDisplay";
import { ScrollReset } from "./ScrollReset";
import { Cart } from "./components/Cart";
import { Credentials } from "./components/Credentials";
import { ReviewCart } from "./components/ReviewCart";
import { Checkout } from "./components/Checkout";
import { AdminPage } from "./components/AdminPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { OrderStatus } from "./components/OrderStatus";
import { Missing } from "./components/Missing";

const stripePromise = loadStripe(
  "pk_test_51KbdJaKUrMl18TxeshrupV7f6bmv6LtqQvHpvz9Vw6EsxcdOdLFXRUWLJbi5xG9zX5T4L5W3KIBo7kKYwzFh7cIU000DKyEEmv"
);

function App() {
  const [search, setSearch] = useState<string>("");
  const [product, setProduct] = useState<ProductType>();
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <CssBaseline />
      <StoreBar
        search={search}
        setSearch={setSearch}
        setShowCart={setShowCart}
      />

      <ScrollReset>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route
            element={
              <Search
                search={search}
                setSearch={setSearch}
                setProduct={setProduct}
              />
            }
            path="/search"
          />
          <Route
            element={<ProductDisplay product={product} />}
            path="/product"
          />
          <Route element={<Credentials />} path="/login" />
          <Route
            element={<ReviewCart setProduct={setProduct} />}
            path="/cart"
          />
          <Route
            element={
              <Elements stripe={stripePromise}>
                <Checkout />
              </Elements>
            }
            path="/checkout"
          />
          <Route element={<AdminPage />} path="/admin" />
          <Route element={<OrderStatus />} path="/orders" />
          <Route element={<Missing />} path="/*" />
        </Routes>
      </ScrollReset>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
