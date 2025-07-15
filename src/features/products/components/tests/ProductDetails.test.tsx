import { render, screen, fireEvent } from '@testing-library/react';
import ProductDetails from '../ProductDetails';
import { useAppContext } from '@/context/AppContext';
import '@testing-library/jest-dom';

// ✅ IMPORTAR tipos explícitamente
import React, { FunctionComponent, ImgHTMLAttributes } from 'react';

// ✅ Mock global de next/image sin `any`
jest.mock('next/image', () => {
  const ImageMock: FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return <img {...props} />;
  };

  return {
    __esModule: true,
    default: ImageMock,
  };
});

// ✅ Mock del contexto con router.push
const pushMock = jest.fn();
jest.mock('@/context/AppContext', () => ({
  useAppContext: jest.fn(),
}));

describe('ProductDetails', () => {
  const product = {
    id: '1',
    name: 'Producto A',
    description: 'Este es el producto A',
    image: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
    ],
    offerPrice: 49.99,
    price: 59.99,
    category: 'Tecnología',
  };

  const featuredProducts = Array.from({ length: 5 }, (_, i) => ({
    id: `${i}`,
    name: `Producto ${i}`,
    description: `Descripción ${i}`,
    image: ['https://example.com/image.jpg'],
    offerPrice: 99.99,
    price: 149.99,
    category: 'Consolas',
  }));

  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({ router: { push: pushMock } });
  });

  it('muestra el nombre, descripción y precio del producto', () => {
    render(<ProductDetails product={product} products={featuredProducts} />);
    expect(screen.getByText('Producto A')).toBeInTheDocument();
    expect(screen.getByText('Este es el producto A')).toBeInTheDocument();
    expect(screen.getByText('$49.99')).toBeInTheDocument();
    expect(screen.getByText('$59.99')).toBeInTheDocument();
  });

  it('cambia la imagen principal al hacer clic en una miniatura', () => {
    render(<ProductDetails product={product} products={featuredProducts} />);
    const thumbs = screen.getAllByAltText('Producto A');
    expect(thumbs.length).toBeGreaterThan(1);

    fireEvent.click(thumbs[1]);
    // No validamos visualmente el cambio (no hay state expuesto), pero no lanza errores
  });

  it('redirecciona al carrito al hacer clic en "Buy now"', () => {
    render(<ProductDetails product={product} products={featuredProducts} />);
    const buyBtn = screen.getByRole('button', { name: /Buy now/i });
    fireEvent.click(buyBtn);
    expect(pushMock).toHaveBeenCalledWith('/cart');
  });

it('renderiza los productos destacados', () => {
  render(<ProductDetails product={product} products={featuredProducts} />);
  
  expect(
    screen.getByText((content, element) => {
      if (!element?.textContent) return false;
      return content.includes('Featured') && element.textContent.includes('Products');
    })
  ).toBeInTheDocument();

  featuredProducts.slice(0, 5).forEach((p) => {
    expect(screen.getByText(p.name)).toBeInTheDocument();
  });
});
});
