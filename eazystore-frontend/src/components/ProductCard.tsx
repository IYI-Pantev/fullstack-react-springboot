import Price from "./Price";
import type { Products } from "../data/products";

export default function ProductCard({ product }: { product: Products }) {
  const { imageUrl, name, description, price } = product;
  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img src={imageUrl} alt={name} className="product-card-image" />
      </div>
      <div className="product-card-details">
        <h2 className="product-card-title">{name}</h2>
        <p className="product-card-description">{description}</p>
        <div className="product-card-footer">
          <div className="product-card-price">
            <Price currency="$" price={price} />
          </div>
        </div>
      </div>
    </div>
  );
}
