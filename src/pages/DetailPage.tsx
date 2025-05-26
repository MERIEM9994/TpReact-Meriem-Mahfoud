// src/pages/DetailPage.tsx
import { useParams } from 'react-router-dom';
import { ProductDetail } from '../components/ProductDetail';
import { mockProducts } from '../data/products';
import './DetailPage.css';

// Export par défaut recommandé pour les composants de page
const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return <div className="not-found">Produit non trouvé 😢</div>;
  }

  return (
    <div className="detail-page">
      <header className="kawaii-header">
        <h1>🌸 Merry Kawaii Stationary 🌸</h1>
      </header>
      <ProductDetail product={product} />
    </div>
  );
};

export default DetailPage; // Export par défaut
