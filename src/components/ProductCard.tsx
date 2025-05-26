import { Product } from '../data/products';
import { Link } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={`product-card ${product.isPopular ? 'popular' : ''}`}>
      {product.isPopular && <div className="popular-badge">Populaire !</div>}
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p className="quantity">Stock: {product.quantity}</p>
      <p className="price">{product.price}€</p>
      <Link to={`/product/${product.id}`} className="detail-button">
        Voir détails 🌸
      </Link>
    </div>
  );
};