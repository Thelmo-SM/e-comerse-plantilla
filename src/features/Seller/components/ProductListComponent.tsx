'use client';

import React from 'react';
import Image from 'next/image';
import { assets, productsDummyData } from '@/assets/assets';

const ProductListComponent: React.FC = () => {
  const products = productsDummyData;

  return (
    <section className="w-full px-4 md:px-10 py-10 bg-blue-50 text-sm">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">Listado de Productos</h2>

      <div className="overflow-x-auto">
        <table className="w-full max-w-6xl mx-auto bg-blue-50/30 border border-gray-300 rounded-lg shadow-sm table-auto">
          <thead className="bg-blue-100 text-blue-900 text-left text-sm">
            <tr>
              <th className="px-4 py-3 font-medium w-2/5">Producto</th>
              <th className="px-4 py-3 font-medium max-sm:hidden">Categoría</th>
              <th className="px-4 py-3 font-medium">Precio</th>
              <th className="px-4 py-3 font-medium max-sm:hidden">Acción</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 bg-white">
            {products.map((product, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-blue-50/40 transition">
                <td className="px-4 py-3 flex items-center gap-4">
                  <div className="bg-gray-100 p-2 rounded">
                    <Image
                      src={product.image[0]}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-contain rounded"
                    />
                  </div>
                  <span className="truncate font-medium">{product.name}</span>
                </td>
                <td className="px-4 py-3 max-sm:hidden">{product.category}</td>
                <td className="px-4 py-3 text-blue-800 font-semibold">${product.offerPrice}</td>
                <td className="px-4 py-3 max-sm:hidden">
                  <button
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-blue-50 rounded-md text-xs transition cursor-pointer"
                    disabled
                    title="Visitar producto (desactivado en versión estática)"
                  >
                    <span className="hidden md:inline">Ver</span>
                    <Image
                      src={assets.redirect_icon}
                      alt="redirect_icon"
                      width={12}
                      height={12}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductListComponent;
