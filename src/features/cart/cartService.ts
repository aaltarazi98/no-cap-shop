import axios from "axios";
import { ProductType, UserType } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useStripe } from "@stripe/react-stripe-js";
const API_URL = process.env.REACT_APP_SERVER! + "/orders/";

// Purchase cart
const purchase = async (
  cart: ProductType[],
  user: UserType,
  paymentId: string,
  amount: number,
  address: string
) => {
  const products: string[] = cart.map((product: ProductType) => product._id);
  const data = {
    user: user._id,
    products,
    paymentId,
    amount,
    address,
  };

  const response = await axios({
    method: "POST",
    url: API_URL,
    headers: {
      Authorization: "Bearer " + user.token,
    },
    data,
  });

  return response;
};

export const cartService = {
  purchase,
};
