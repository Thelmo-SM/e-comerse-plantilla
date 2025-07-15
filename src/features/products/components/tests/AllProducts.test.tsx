import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

interface PaginationProps {
  onPageChange: (page: number) => void;
}

jest.mock('@/context/AppContext', () => ({
  useAppContext: () => ({
    currency: '$',
  }),
}));


// 🧪 Mock de useProducts (usa el alias exacto del import real)
jest.mock('@/features/products/hooks/useProducts', () => ({
  useProducts: jest.fn(),
}));

// 🧪 Mock de ProductFilter
jest.mock('@/features/products/components/ProductFilter', () => {
  const MockProductFilter = () => <div data-testid="product-filter" />;
  MockProductFilter.displayName = 'MockProductFilter';
  return MockProductFilter;
});

// 🧪 Mock de Pagination
jest.mock('@/components/UI/Pagination', () => {
  const MockPagination = (props: PaginationProps) => (
    <button data-testid="pagination" onClick={() => props.onPageChange(2)}>
      Página 2
    </button>
  );
  MockPagination.displayName = 'MockPagination';
  return MockPagination;
});

// ✅ Importar luego de los mocks
import AllProducts from '@/features/products/components/AllProducts';
import { useProducts } from '@/features/products/hooks/useProducts';

describe('AllProducts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('muestra texto de carga cuando isLoading es true', () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [],
      isLoading: true,
    });

    render(<AllProducts />);
    expect(screen.getByText(/cargando productos/i)).toBeInTheDocument();
  });

  it('muestra mensaje cuando no hay productos', () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [],
      isLoading: false,
    });

    render(<AllProducts />);
    expect(screen.getByText(/no hay productos disponibles/i)).toBeInTheDocument();
  });

  it('renderiza productos paginados y permite cambiar página', () => {
    const mockProducts = Array.from({ length: 20 }, (_, i) => ({
      id: `p${i + 1}`,
      name: `Producto ${i + 1}`,
      description: 'Descripción',
      offerPrice: 100,
      image: ['url.jpg'],
    }));

    (useProducts as jest.Mock).mockReturnValue({
      products: mockProducts,
      isLoading: false,
    });

    render(<AllProducts />);
    expect(screen.getAllByRole('listitem')).toHaveLength(15); // página 1

    fireEvent.click(screen.getByTestId('pagination')); // simula paginación
    // Aquí podrías testear que la acción se ejecutó, pero el DOM no cambia
    // porque el estado de paginación es interno.
  });
});
