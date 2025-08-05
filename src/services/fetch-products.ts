import api from "./api";
import Product from "@/types/Product";

export async function getProducts() {
  try {
    const response = await api.get("/products");

    const dataToParse =
      typeof response.data === "string"
        ? JSON.parse(response.data)
        : response.data;

    const products = Product.parse(dataToParse);

    return products;
  } catch (error) {
    console.error("Falha ao buscar ou validar produtos:", error);
    return [];
  }
}
