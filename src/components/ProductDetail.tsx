import { Product } from '../data/products';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="detail-image"
        />
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p className="detail-quantity">En stock: {product.quantity}</p>
          <p className="detail-price">{product.price}€</p>
          <p className="detail-description">{product.description}</p>
          <Link to="/" className="back-button">
            Retour au catalogue 🏠
          </Link>
        </div>
      </div>
    </div>
  );
};