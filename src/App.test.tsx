import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('affiche le titre de la boutique', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Solution 1: Texte exact
  expect(screen.getByText('Merry Kawaii Stationary')).toBeInTheDocument();
  
  // Solution 2: Regex plus flexible
  expect(screen.getByText(/merry kawaii stationary/i)).toBeInTheDocument();
  
  // Solution 3: Meilleure pratique avec getByRole
  expect(screen.getByRole('heading', { name: /merry kawaii stationary/i })).toBeInTheDocument();
});