'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';
import type { ProductType } from '@/types/product';
import { mockProducts } from '@/utils/data/arrayProducts';

const HomeProducts: React.FC = () => {
  const { isLoading } = useProducts();
          //products
  const products = mockProducts

  if (isLoading) return <p className="text-center py-10 text-gray-600">Cargando productos...</p>;
  if (!products || products.length === 0) return <p className="text-center py-10 text-gray-500">No hay productos disponibles.</p>;

  return (
    <section className="flex flex-col items-center pt-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 w-full mb-6">
        Productos populares
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
        {products.slice(0, 10).map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10">
        <button
          className="px-8 py-2.5 border border-gray-300 text-blue-900 rounded-md shadow-sm hover:bg-blue-200 transition-colors duration-200"
        >
          Ver más productos
        </button>
      </div>
    </section>
  );
};

export default HomeProducts;
