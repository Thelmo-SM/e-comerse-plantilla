// src/context/types.ts

import { useRouter } from "next/navigation";

type AppRouterInstance = ReturnType<typeof useRouter>;

export interface Product {
  _id: string;
  name: string;
  description: string;
  image: string[];
  offerPrice: number;
  price: number;
  category: string;
}

export interface UserData {
  _id: string;
  name: string;
  email?: string;
  // Otros campos del usuario
}

export interface AppContextType {
  currency?: string;
  router: AppRouterInstance;
  isSeller: boolean;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserData | false;
  fetchUserData: () => Promise<void>;
  products: Product[];
  fetchProductData: () => Promise<void>;
  cartItems: Record<string, number>;
  setCartItems: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  addToCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  getCartCount: () => number;
  getCartAmount: () => number;
}
