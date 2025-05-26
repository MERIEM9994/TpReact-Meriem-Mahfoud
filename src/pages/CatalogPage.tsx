// src/pages/CatalogPage.tsx
import { ProductCard } from '../components/ProductCard';
import { mockProducts } from '../data/products';
import './CatalogPage.css';

const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <header className="kawaii-header">
        <h1>🌸 Merry Kawaii Stationary 🌸</h1>
        <p>Découvrez nos produits trop mignons !</p>
      </header>
      
      <div className="products-grid">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
