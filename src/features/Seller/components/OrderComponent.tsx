'use client';

import React from 'react';
import Image from 'next/image';
import { assets, orderDummyData } from '@/assets/assets';

const OrdersComponent: React.FC = () => {
  const orders = orderDummyData;
  const currency = 'RD$'; // Estático por ahora

  return (
    <section className="w-full px-4 md:px-10 py-10 bg-blue-50 text-sm">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">Órdenes recientes</h2>

      <div className="max-w-6xl mx-auto space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-blue-50/50 border border-gray-200 rounded-md p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6 shadow-sm hover:shadow-md transition"
          >
            {/* Product Info */}
            <div className="flex gap-4 md:max-w-xs">
              <Image
                src={assets.box_icon}
                alt="box_icon"
                width={64}
                height={64}
                className="object-contain"
              />
              <div>
                <p className="font-medium text-gray-800">
                  {order.items
                    .map((item) => `${item.product.name} x ${item.quantity}`)
                    .join(', ')}
                </p>
                <p className="text-gray-500 mt-1">Items: {order.items.length}</p>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="text-gray-600 text-sm">
              <p>
                <span className="font-semibold text-gray-700">{order.address.fullName}</span><br />
                {order.address.area}<br />
                {order.address.city}, {order.address.state}<br />
                {order.address.phoneNumber}
              </p>
            </div>

            {/* Total */}
            <div className="text-blue-900 font-semibold text-base md:my-auto">
              Total: {currency}{order.amount}
            </div>

            {/* Payment Info */}
            <div className="text-gray-600 text-sm">
              <p className="space-y-1 flex flex-col">
                <span>Método: Contra Entrega</span>
                <span>Fecha: {new Date(order.date).toLocaleDateString()}</span>
                <span className="text-red-600 font-medium">Pago: Pendiente</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersComponent;
