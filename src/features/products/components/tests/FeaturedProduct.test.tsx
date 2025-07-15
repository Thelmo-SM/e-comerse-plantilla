// src/features/products/components/tests/FeaturedProduct.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedProduct from '../FeaturedProduct';
import '@testing-library/jest-dom';
import type { ImgHTMLAttributes, FC } from 'react';

// Mock de next/image para Jest
jest.mock('next/image', () => {
  const ImageMock: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return <img {...props} alt={props.alt || 'mocked image'} />;
  };

  return {
    __esModule: true,
    default: ImageMock,
  };
});

// Mock de assets locales usados en el componente
jest.mock('@/assets/assets', () => ({
  assets: {
    girl_with_headphone_image: '/mock-headphone.jpg',
    girl_with_earphone_image: '/mock-earphone.jpg',
    boy_with_laptop_image: '/mock-laptop.jpg',
    redirect_icon: '/mock-icon.jpg',
  },
}));

describe('FeaturedProduct', () => {
  it('muestra el título principal "Featured Products"', () => {
    render(<FeaturedProduct />);
    expect(screen.getByText(/Featured Products/i)).toBeInTheDocument();
  });

  it('renderiza todos los títulos de productos', () => {
    render(<FeaturedProduct />);
    expect(screen.getByText('Unparalleled Sound')).toBeInTheDocument();
    expect(screen.getByText('Stay Connected')).toBeInTheDocument();
    expect(screen.getByText('Power in Every Pixel')).toBeInTheDocument();
  });

  it('muestra las descripciones y botones de cada producto', () => {
    render(<FeaturedProduct />);
    expect(screen.getByText(/Experience crystal-clear audio/i)).toBeInTheDocument();
    expect(screen.getByText(/Compact and stylish earphones/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop the latest laptops/i)).toBeInTheDocument();

    const buyButtons = screen.getAllByRole('button', { name: /Buy now/i });
    expect(buyButtons.length).toBe(3);
  });

  it('imprime el contenido renderizado para debugging (opcional)', () => {
    // console.log(container.innerHTML);
  });
});
