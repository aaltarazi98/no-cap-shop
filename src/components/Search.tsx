import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import { ProductType } from "../types";
import { ProductCard } from "./Search Components/ProductCard";
import axios from "axios";

interface Props {
  search: string;
  setProduct: React.Dispatch<React.SetStateAction<ProductType | undefined>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function Search({ search, setProduct, setSearch }: Props) {
  const navigate = useNavigate();
  const [results, setResults] = useState<ProductType[]>([]);
  const [limit, setLimit] = useState<number>(12);

  async function fetchAndSetProducts(): Promise<void> {
    try {
      if (search === "all") {
        const data = await axios(`${process.env.REACT_APP_SERVER!}/products`);
        setResults(data.data);
      } else {
        const data = await axios(
          `${process.env.REACT_APP_SERVER!}/products/${search}`
        );
        setResults(data.data);
      }
    } catch (error) {
      setResults([]);
      console.error(error);
    }
  }

  useEffect(() => {
    if (search === "") {
      navigate("/");
    } else {
      fetchAndSetProducts();
    }
  }, [search]);

  function handleMore(): void {
    if (limit + 12 > results.length) {
      setLimit(results.length);
    } else {
      setLimit(limit + 12);
    }
  }

  if (results.length !== 0) {
    return (
      <Container maxWidth="xl" sx={{ my: 2 }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Search results for '{search}'
          </Typography>
          <Divider sx={{ width: "100%" }} />
        </Box>
        <Grid container sx={{ minHeight: 800 }} spacing={4}>
          {results?.map((product, index) => {
            while (index < limit) {
              return (
                <Grid
                  item
                  xs={6}
                  md={3}
                  onClick={(): void => {
                    setProduct(product);
                    navigate("/product");
                  }}
                >
                  <ProductCard product={product} />
                </Grid>
              );
            }
          })}
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {results?.length < limit && (
              <Button
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleMore}
              >
                Load More
              </Button>
            )}
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ width: "100%", my: 3 }} />
            <Typography variant="subtitle1">
              Showing {results?.length > limit ? limit : results?.length} of{" "}
              {results?.length} items
            </Typography>
            <Divider sx={{ width: "100%", my: 3 }} />
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container
        maxWidth="sm"
        sx={{
          my: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" textAlign="center" gutterBottom>
          No results were found for "{search}".
        </Typography>
        <Typography variant="h5" gutterBottom textAlign="center">
          Please note that since this is a demo, not many products are stored
          and fuzzy search is not yet supported. You can add products in the
          admin page!
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => navigate("/admin")}
        >
          Check out admin page
        </Button>
        <Divider sx={{ width: "50%", my: 1 }}>OR</Divider>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setSearch("all")}
        >
          Show me all products
        </Button>
      </Container>
    );
  }
}
