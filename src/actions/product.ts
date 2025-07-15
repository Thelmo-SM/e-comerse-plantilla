import { supabase } from "@/utils/supabase/client";
import type { ProductType } from "@/types/product";

function isRawProduct(obj: unknown): obj is Record<string, unknown> {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "id" in obj &&
    "name" in obj &&
    "image_url" in obj &&
    "offer_price" in obj
  );
}

export const getProducts = async (): Promise<ProductType[]> => {
  const { data, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  if (!data) return [];

  return data.filter(isRawProduct).map((p) => ({
    id: String(p.id),
    name: String(p.name),
    description: typeof p.description === "string" ? p.description : "",
    image: Array.isArray(p.image_url) ? p.image_url.map(String) : [],
    offerPrice: typeof p.offer_price === "number" ? p.offer_price : 0,
    price: typeof p.price === "number" ? p.price : 0,
    category: typeof p.category === "string" ? p.category : "",
  }));
};

export const getFilteredProducts = async ({ page = 1, brands = [] }: {
  page: number;
  brands: string[];
}) => {
  const itemsPerPage = 10;
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  let query = supabase
    .from("products")
    .select("*, variants(*)", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (brands.length > 0) {
    query = query.in("brand", brands);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return { data, count };
};
