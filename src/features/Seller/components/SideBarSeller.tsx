'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlusCircle, ListOrdered, Package } from 'lucide-react';

const SideBarSeller = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Add Product', path: '/seller', icon: PlusCircle },
    { name: 'Product List', path: '/seller/product-list', icon: ListOrdered },
    { name: 'Orders', path: '/seller/orders', icon: Package },
  ];

  return (
    <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col">
      {menuItems.map(({ name, path, icon: Icon }, index) => {
        const isActive = pathname === path;
        return (
          <Link href={path} key={index} className="text-blue-900">
            <div
              className={`flex items-center py-3 px-4 gap-3 ${
                isActive
                  ? 'border-r-4 md:border-r-[6px] bg-blue-200 border-blue-900/90'
                  : 'hover:bg-blue-200/90'
              }`}
            >
              <Icon className="w-6 h-6" />
              <p className="md:block hidden text-center">{name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBarSeller;
