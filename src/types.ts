export interface ProductType {
  _id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string;
}

export interface UserType {
  _id?: string;
  email: string;
  password: string;
  token?: string;
}

export interface OrderType {
  _id: string;
  products: string[];
  address: string;
  user: string;
}
