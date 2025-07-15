'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';
import type { ProductType } from '@/types/product';
import ProductFilter from './ProductFilter';
import Pagination from '@/components/UI/Pagination';
import { mockProducts } from '@/utils/data/arrayProducts';

const AllProducts: React.FC = () => {
  const {  isLoading } = useProducts();
          //products
  const products = mockProducts

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  if (isLoading) return <p>Cargando productos...</p>;
  if (!products || products.length === 0) return <p>No hay productos disponibles.</p>;

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="flex flex-col items-center px-6 md:px-16 lg:px-32"
      aria-labelledby="products-title"
    >
      <div className="w-full max-w-7xl">
        <div className="flex flex-col items-start pt-12 text-left">
          <h1 id="products-title" className="text-2xl font-semibold text-blue-900">
            Todos los productos
          </h1>
          <div className="w-16 h-0.5 bg-blue-800 rounded-full mb-5"></div>
        </div>

        <ProductFilter />

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 pb-14 w-full"
          role="list"
          aria-label="Lista de productos"
        >
          {currentProducts.map((product: ProductType) => (
            <article key={product.id} role="listitem">
              <ProductCard product={product} />
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <p className="text-sm text-gray-600">
            Página {currentPage} de {totalPages}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
