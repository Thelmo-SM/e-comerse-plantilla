'use client';

import React, { useState } from 'react';

const categories = [
  'Todos',
  'Tecnología',
  'Consolas',
  'TV',
  'Accesorios',
  // ... hasta 50 o más
];

const sortOptions = [
  { label: 'Más recientes', value: 'recent' },
  { label: 'Más antiguos', value: 'oldest' },
  { label: 'Más baratos', value: 'low-price' },
  { label: 'Más caros', value: 'high-price' },
];

const ProductFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortOrder, setSortOrder] = useState('recent');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  return (
    <section
      className="bg-blue-50 rounded-lg p-4 text-sm w-full mb-6 shadow-md"
      aria-labelledby="filter-heading"
    >
      <h2 id="filter-heading" className="font-semibold text-base text-blue-950 mb-4">
        Filtros de productos
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        {/* Filtro por Categoría */}
        <div className="w-full sm:w-auto sm:max-w-xs flex-1">
          <label
            htmlFor="category-select"
            className="block text-sm text-gray-800 font-medium mb-1"
          >
            Categoría
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-900 shadow-sm transition"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por Orden */}
        <div className="w-full sm:w-auto sm:max-w-xs flex-1">
          <label
            htmlFor="sort-select"
            className="block text-sm text-gray-800 font-medium mb-1"
          >
            Ordenar por
          </label>
          <select
            id="sort-select"
            value={sortOrder}
            onChange={handleSortChange}
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-900 shadow-sm transition"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className='text-gray-600'>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
