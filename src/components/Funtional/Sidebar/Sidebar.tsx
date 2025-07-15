import React from 'react';
import Link from 'next/link';
import { assets } from '@/assets/assets'; // Usa alias absoluto para mayor claridad
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Add Product', path: '/seller', icon: assets.add_icon },
    { name: 'Product List', path: '/seller/product-list', icon: assets.product_list_icon },
    { name: 'Orders', path: '/seller/orders', icon: assets.order_icon },
  ];

  return (
    <aside className="md:w-64 w-16 border-r min-h-screen border-gray-300 py-2 flex flex-col text-base">
      {menuItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link href={item.path} key={item.name} passHref>
            <a
              className={`flex items-center py-3 px-4 gap-3 ${
                isActive
                  ? 'border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90'
                  : 'hover:bg-gray-100/90 border-white'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Image
                src={item.icon}
                alt={`${item.name.toLowerCase()} icon`}
                className="w-7 h-7"
              />
              <span className="md:block hidden text-center">{item.name}</span>
            </a>
          </Link>
        );
      })}
    </aside>
  );
};

export default SideBar;
