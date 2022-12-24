import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../api/firebase";
import ProductCard from "../components/ui/ProductCard";

export default function AllProducts() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);

  return (
    <section>
      <h1>{isLoading ? "Loading..." : ""}</h1>
      <h1>{isLoading ? "Loading..." : ""}</h1>
      <article>
        {products && (
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        )}
      </article>
    </section>
  );
}
