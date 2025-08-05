import { useState, useEffect } from "react";
import api from "@/services/api";
import Product from "@/types/Product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await api.get("/products");

        setProducts(response.data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Ocorreu um erro desconhecido")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error };
}
