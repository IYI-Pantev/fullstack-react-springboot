import ProductCard from "./ProductCard";
import type { Products } from "../data/products";

export default function ProductListings({
  products,
}: {
  products: Products[];
}) {
  return (
    <div className="product-listings-container">
      <div className="product-listings-grid">
        {products.length > 0 ? (
          products.map((product: Products) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="product-listings-empty">No products found</p>
        )}
      </div>
    </div>
  );
}
