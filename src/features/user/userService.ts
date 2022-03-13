import axios from "axios";
import { UserType } from "../../types";

const API_URL = process.env.REACT_APP_SERVER! + "/users/";

// Register user
const register = async (userData: UserType) => {
  const response = await axios.post(API_URL + "signup", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  } else {
    console.log(response);
  }

  return response.data;
};

// Login user
const login = async (userData: UserType) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  } else {
    console.log(response);
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

export const userService = {
  register,
  login,
  logout,
};
