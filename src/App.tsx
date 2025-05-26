// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage'; // Import par défaut
import DetailPage from './pages/DetailPage';   // Import par défaut
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
