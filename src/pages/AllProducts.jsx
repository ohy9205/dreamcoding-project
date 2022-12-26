import React from "react";
import ProductCard from "../components/ui/ProductCard";
import useProducts from "../hooks/useProducts";

export default function AllProducts() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

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
