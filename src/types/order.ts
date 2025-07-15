// types/Order.ts
export interface ProductType {
  _id: string;
  name: string;
  image: string[];
  offerPrice: number;
  category: string;
  description?: string;
  price?: number;
}

export interface OrderItem {
  product: ProductType;
  quantity: number;
}

export interface Address {
  fullName: string;
  area: string;
  city: string;
  state: string;
  phoneNumber: string;
}

export interface OrderType {
  items: OrderItem[];
  address: Address;
  amount: number;
  date: string; // ISO string
}
