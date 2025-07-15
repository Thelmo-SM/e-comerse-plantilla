export interface ProductType {
  id: string;
  name: string;
  description: string;
  image: string[];
  offerPrice: number;
  price: number;
  category: string;
}

export interface RawProduct {
  id: string;
  name: string;
  description: string | null;
  image_url: string[];
  offer_price: number | null;
  price: number;
  category: string;
}
