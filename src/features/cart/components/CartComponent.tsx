'use client';

import React from 'react';
import { assets } from '@/assets/assets';
import OrderSummary from '@/features/Order/components/OrderSummary';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const CartComponent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 lg:px-32 pt-14 mb-20">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-8 border-b border-blue-900/30 pb-6">
          <p className="text-2xl md:text-3xl text-gray-800">
            Tu <span className="font-medium text-blue-900">Carrito</span>
          </p>
          <p className="text-lg md:text-xl text-blue-900/80">3 Items</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="text-left">
              <tr>
                <th className="text-nowrap pb-6 md:px-4 px-1 text-gray-600 font-medium">
                  Product Details
                </th>
                <th className="pb-6 md:px-4 px-1 text-gray-600 font-medium">Precio</th>
                <th className="pb-6 md:px-4 px-1 text-gray-600 font-medium">Cantidad</th>
                <th className="pb-6 md:px-4 px-1 text-gray-600 font-medium">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center gap-4 py-4 md:px-4 px-1">
                  <div>
                    <div className="rounded-lg overflow-hidden bg-gray-500/10 p-2">
                      <Image
                        src="/placeholder-image.jpg"
                        alt="Product Name"
                        className="w-16 h-auto object-cover mix-blend-multiply"
                        width={1280}
                        height={720}
                      />
                    </div>
                    <button className="md:hidden text-xs text-blue-900 cursor-pointer mt-1">
                      Remove
                    </button>
                  </div>
                  <div className="text-sm hidden md:block">
                    <p className="text-gray-800">Nombre del producto</p>
                    <button className="text-xs text-blue-900 cursor-pointer mt-1">
                      Eliminar
                    </button>
                  </div>
                </td>

                <td className="py-4 md:px-4 px-1 text-gray-600">$99.99</td>

                <td className="py-4 md:px-4 px-1">
                  <div className="flex items-center md:gap-2 gap-1">
                    <button className='cursor-pointer'>
                      <Image
                        src={assets.decrease_arrow}
                        alt="decrease"
                        className="w-4 h-4"
                      />
                    </button>
                    <input
                      type="number"
                      value="1"
                      className="w-8 border text-center appearance-none text-gray-600"
                      readOnly
                    />
                    <button className='cursor-pointer'>
                      <Image
                        src={assets.increase_arrow}
                        alt="increase"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </td>

                <td className="py-4 md:px-4 px-1 text-gray-600">$99.99</td>
              </tr>
              {/* Puedes duplicar <tr> si quieres simular más productos */}
            </tbody>
          </table>
        </div>

        <button className="group flex items-center mt-6 gap-2 text-blue-900 cursor-pointer">
          <ArrowLeft className="text-blue-900" size={20} />
          Continue Shopping
        </button>
      </div>

      <OrderSummary />
    </div>
  );
};

export default CartComponent;
