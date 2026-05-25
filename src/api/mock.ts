import { PRODUCTS } from "../data/mock";

export const fetchProducts = async (query: string) => {
  if (!query) return PRODUCTS;

  return PRODUCTS.filter((e) =>
    e.name.toLowerCase().includes(query.toLowerCase()),
  );
};
