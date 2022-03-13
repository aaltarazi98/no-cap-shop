import { fabClasses } from "@mui/material";
import {
  createSlice,
  createAsyncThunk,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import { cartService } from "./cartService";
import { ProductType } from "../../types";

// Get cart from localStorage
const cart: ProductType[] = JSON.parse(localStorage.getItem("cart")!);

const initialState = {
  cart: cart ? cart : [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Purchase cart
export const purchase = createAsyncThunk(
  "cart/purchase",
  async (orderData: any, thunkAPI) => {
    try {
      return await cartService.purchase(
        orderData.cart,
        orderData.user,
        orderData.paymentId,
        orderData.amount,
        orderData.address
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => {
      localStorage.removeItem("cart");
      state = initialState;
    },
    addItem(state, action: PayloadAction<ProductType>) {
      const cart: ProductType[] = state.cart!;
      state.cart = [...cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem(state, action: PayloadAction<number>) {
      const index: number = action.payload;
      const cart: ProductType[] = state.cart!;
      state.cart = cart.slice(0, index).concat(cart.slice(index + 1));
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(purchase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(purchase.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = String(action.payload.data.message);
      })
      .addCase(purchase.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = String(action.payload.data.message);
      });
  },
});

export const { reset, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
