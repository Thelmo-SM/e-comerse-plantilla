import { render, screen } from '@testing-library/react';
import HomeProducts from '../HomeProducts';
import { useProducts } from '../../hooks/useProducts';
import '@testing-library/jest-dom';

// 🧪 Mock del hook
jest.mock('../../hooks/useProducts');

describe('HomeProducts', () => {
  const mockUseProducts = useProducts as jest.Mock;

  it('muestra el mensaje de carga', () => {
    mockUseProducts.mockReturnValue({ products: [], isLoading: true });
    render(<HomeProducts />);
    expect(screen.getByText(/Cargando productos/i)).toBeInTheDocument();
  });

  it('muestra mensaje si no hay productos', () => {
    mockUseProducts.mockReturnValue({ products: [], isLoading: false });
    render(<HomeProducts />);
    expect(screen.getByText(/No hay productos disponibles/i)).toBeInTheDocument();
  });

  it('muestra la lista de productos', () => {
    const mockProducts = Array.from({ length: 5 }, (_, i) => ({
      id: `${i}`,
      name: `Producto ${i}`,
      description: `Descripción ${i}`,
      image: ['https://example.com/image.jpg'],
      offerPrice: 99.99,
      price: 129.99,
      category: 'Tecnología',
    }));

    mockUseProducts.mockReturnValue({ products: mockProducts, isLoading: false });
    render(<HomeProducts />);

    expect(screen.getByText(/Productos populares/i)).toBeInTheDocument();
    mockProducts.forEach((p) => {
      expect(screen.getByText(p.name)).toBeInTheDocument();
    });

    expect(screen.getByRole('button', { name: /Ver más productos/i })).toBeInTheDocument();
  });
});
